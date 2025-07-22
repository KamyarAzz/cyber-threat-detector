import axios from "axios";
import crypto from "crypto";

const apiKey = process.env.VIRUSTOTAL_API_KEY!;
const apiBase = process.env.VIRUSTOTAL_URL!;

// Caching (in-memory)
const fileScanCache = new Map<string, any>();
const urlScanCache = new Map<string, any>();

// Rate limiting (1min)
let tokens = 4;
const refillInterval = 60 * 1000;

setInterval(() => {
  tokens = 4;
}, refillInterval);

function getFileHash(buffer: Buffer, algo: "md5" | "sha256" = "sha256") {
  return crypto.createHash(algo).update(buffer).digest("hex");
}

function getBase64UrlID(url: string) {
  return Buffer.from(url).toString("base64").replace(/=+$/, "");
}

export async function scanFileWithVirusTotal(file: Express.Multer.File) {
  const hash = getFileHash(file.buffer);

  if (fileScanCache.has(hash)) return fileScanCache.get(hash);

  if (tokens <= 0) {
    return {
      fallback: true,
      message: "Rate limit reached. Skipped VirusTotal scan.",
    };
  }

  tokens--;

  try {
    const uploadRes = await axios.post(`${apiBase}/files`, file.buffer, {
      headers: {
        "x-apikey": apiKey,
        "Content-Type": "application/octet-stream",
      },
    });

    const analysisId = uploadRes.data.data.id;

    const result = await axios.get(`${apiBase}/analyses/${analysisId}`, {
      headers: {"x-apikey": apiKey},
    });

    const scanResult = {
      hash,
      filename: file.originalname,
      size: file.size,
      result: result.data,
    };

    fileScanCache.set(hash, scanResult);
    return scanResult;
  } catch (err) {
    console.error("VirusTotal file scan error:", err);
    return {error: "VirusTotal file scan failed"};
  }
}

export async function scanUrlWithVirusTotal(url: string) {
  const id = getBase64UrlID(url);

  if (urlScanCache.has(id)) return urlScanCache.get(id);

  if (tokens <= 0) {
    return {
      fallback: true,
      message: "Rate limit reached. Skipped VirusTotal scan.",
    };
  }

  tokens--;

  try {
    // Submit for scanning
    await axios.post(`${apiBase}/urls`, new URLSearchParams({url}), {
      headers: {"x-apikey": apiKey},
    });

    const res = await axios.get(`${apiBase}/urls/${id}`, {
      headers: {"x-apikey": apiKey},
    });

    const scanResult = {
      url,
      result: res.data,
    };

    urlScanCache.set(id, scanResult);
    return scanResult;
  } catch (err) {
    console.error("VirusTotal URL scan error:", err);
    return {error: "VirusTotal URL scan failed"};
  }
}
