export type EngineCategory =
  | "malicious"
  | "suspicious"
  | "undetected"
  | "harmless"
  | "timeout";

export interface EngineResult {
  method: string;
  engine_name: string;
  category: EngineCategory;
  result: string;
}

export interface UrlStats {
  harmless: number;
  malicious: number;
  suspicious: number;
  undetected: number;
  timeout: number;
}

export interface UrlScanResult {
  url: string;
  detected: boolean;
  message: string;
  stats?: UrlStats;
  results?: Record<string, EngineResult>;
}

export type ScanApiResultType = "url" | "file";

export interface ScanApiResponse {
  success: boolean;
  type: ScanApiResultType;
  result: UrlScanResult;
  error?: string;
}
