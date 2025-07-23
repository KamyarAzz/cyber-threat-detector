export interface BaseResponse {
  success: boolean;
  message?: string;
}

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

type ScanBaseResult = {
  detected: boolean;
  message: string;
  stats?: EngineResultsStats;
  results?: Record<string, EngineResult>;
};

type UrlScanPayload = {
  url: string;
  contentType?: string;
  status?: number;
};

type FileScanPayload = {
  filename: string;
  mime: string;
  size: number;
};

export type ScanResult = ScanBaseResult & (UrlScanPayload | FileScanPayload);

export interface ScanResponse extends BaseResponse {
  type: "url" | "file";
  result: ScanResult;
}

export interface ErrorResponse extends BaseResponse {
  success: false;
  error: string;
}

export type ScanApiResponse = ScanResponse | ErrorResponse;
