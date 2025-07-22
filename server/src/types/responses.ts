// types/responses.ts

export interface BaseResponse {
  success: boolean;
  message?: string;
}

export interface FileScanResult {
  filename: string;
  size: number;
  mime: string;
  detected: boolean;
  message: string;
}

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
  status?: number;
  contentType?: string;
  detected: boolean;
  message: string;
  stats?: UrlStats;
  results?: Record<string, EngineResult>;
}

export interface FileScanResponse extends BaseResponse {
  type: "file";
  result: FileScanResult;
}

export interface UrlScanResponse extends BaseResponse {
  type: "url";
  result: UrlScanResult;
}

export interface ErrorResponse extends BaseResponse {
  success: false;
  error: string;
}

export type ScanApiResponse =
  | FileScanResponse
  | UrlScanResponse
  | ErrorResponse;
