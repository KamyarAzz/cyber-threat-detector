import {EngineResult} from "../../types/responses";

const prioritizedEngines = [
  "Kaspersky",
  "BitDefender",
  "McAfee",
  "Symantec",
  "ESET-NOD32",
  "TrendMicro",
  "Sophos",
  "Avast",
  "Windows Defender",
];

export function summarizeVirusTotalResults(
  data: Record<string, EngineResult>
): Record<string, EngineResult> {
  const filteredResults: Record<string, EngineResult> = {};

  for (const engineName of prioritizedEngines) {
    if (data[engineName]) {
      filteredResults[engineName] = data[engineName];
    }
  }

  return filteredResults;
}
