export type EngineCategory =
  | "malicious"
  | "suspicious"
  | "undetected"
  | "harmless"
  | "timeout"
  | "confirmed-timeout"
  | "failure"
  | "type-unsupported";

export interface EngineResult {
  method: string;
  engine_name: string;
  category: EngineCategory;
  result: string;
}

export type EngineResultsStats = {
  [key in EngineCategory]: number;
};

export interface UrlScanResult {
  url: string;
  detected: boolean;
  message: string;
  stats?: EngineResultsStats;
  results?: Record<string, EngineResult>;
}

export type ScanApiResultType = "url" | "file";

export interface ScanApiResponse {
  success: boolean;
  type: ScanApiResultType;
  result: UrlScanResult;
  error?: string;
}
