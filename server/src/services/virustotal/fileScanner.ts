import {FileScanResult} from "../../types/responses";

export async function scanFileWithVirusTotal(
  file: Express.Multer.File
): Promise<FileScanResult> {
  throw new Error("File scanning with VirusTotal not yet implemented.");
}
