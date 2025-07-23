import axios from "axios";
import FormData from "form-data";
import {sleep} from "../../utils/sleep";
import {FileScanResult, EngineResult, UrlStats} from "../../types/responses";

const apiKey = process.env.VIRUSTOTAL_API_KEY!;
const baseUrl = process.env.VIRUSTOTAL_URL!;

async function submitFile(file: Express.Multer.File): Promise<string> {
  const form = new FormData();
  form.append("file", file.buffer, file.originalname);

  const res = await axios.post(`${baseUrl}/files`, form, {
    headers: {
      ...form.getHeaders(),
      "x-apikey": apiKey,
    },
  });

  return res.data.data.id;
}

async function pollAnalysis(id: string, maxTries = 10, delay = 3000) {
  for (let i = 0; i < maxTries; i++) {
    const res = await axios.get(`${baseUrl}/analyses/${id}`, {
      headers: {"x-apikey": apiKey},
    });

    if (res.data.data.attributes.status === "completed") {
      return res.data.data.attributes;
    }

    await sleep(delay);
  }

  throw new Error("VirusTotal scan timed out");
}

export async function scanFileWithVirusTotal(
  file: Express.Multer.File
): Promise<FileScanResult> {
  const analysisId = await submitFile(file);
  const result = await pollAnalysis(analysisId);

  const stats: UrlStats = result.stats;

  // Determine if any engine found malicious or suspicious
  const detected = stats.malicious > 0 || stats.suspicious > 0;

  return {
    filename: file.originalname,
    size: file.size,
    mime: file.mimetype,
    stats,
    detected,
    message: detected
      ? "Potential threat detected in file"
      : "File appears safe",
    results: result.results as Record<string, EngineResult>,
  };
}
