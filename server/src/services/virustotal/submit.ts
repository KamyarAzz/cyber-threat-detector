import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const apiKey = process.env.VIRUSTOTAL_API_KEY!;
const baseUrl = process.env.VIRUSTOTAL_URL!;

export async function submitUrl(url: string): Promise<string> {
  const res = await axios.post(`${baseUrl}/urls`, new URLSearchParams({url}), {
    headers: {
      "x-apikey": apiKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.data.data.id;
}

export async function submitFile(filePath: string): Promise<string> {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  const res = await axios.post(`${baseUrl}/files`, form, {
    headers: {
      ...form.getHeaders(),
      "x-apikey": apiKey,
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });

  return res.data.data.id;
}
