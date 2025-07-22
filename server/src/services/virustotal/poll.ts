import axios from "axios";
import {sleep} from "../../utils/sleep";

const apiKey = process.env.VIRUSTOTAL_API_KEY!;
const baseUrl = process.env.VIRUSTOTAL_URL!;

export async function pollAnalysis(id: string, maxTries = 10, delay = 3000) {
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
