import axios from "axios";

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
