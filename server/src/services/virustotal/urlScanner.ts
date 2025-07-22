// urlScanner.ts
import {submitUrl} from "./submit";
import {pollAnalysis} from "./poll";
import {UrlScanResult} from "../../types/responses";

export async function scanUrlWithVirusTotal(
  url: string
): Promise<UrlScanResult> {
  console.log("Submitting URL to VirusTotal:", url);
  const analysisId = await submitUrl(url);
  console.log("Received analysisId:", analysisId);
  const result = await pollAnalysis(analysisId);
  console.log("Received pollAnalysis result:", result);

  const detected = result.stats.malicious > 0;

  return {
    url,
    stats: result.stats,
    detected,
    message: detected ? "Potential threat detected" : "URL appears safe",
    results: result.results,
  };
}
