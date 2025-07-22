// urlScanner.ts
import {submitUrl} from "./submit";
import {pollAnalysis} from "./poll";
import {UrlScanResult} from "../../types/responses";
import {summarizeVirusTotalResults} from "./summary";

export async function scanUrlWithVirusTotal(
  url: string
): Promise<UrlScanResult> {
  const analysisId = await submitUrl(url);
  const result = await pollAnalysis(analysisId);

  const detected = result.stats.malicious > 0;

  const summary = summarizeVirusTotalResults(result.results);

  return {
    url,
    stats: result.stats,
    detected,
    message: detected ? "Potential threat detected" : "URL appears safe",
    results: summary,
  };
}
