import {Request, Response} from "express";
import {ScanApiResponse} from "../types/responses";
import {scanFileWithVirusTotal} from "../services/virustotal";
import {scanUrlWithVirusTotal} from "../services/virustotal";

export const handleScan = async (
  req: Request,
  res: Response<ScanApiResponse>
) => {
  try {
    const file = req.file;
    const url = req.body.url;

    if (file) {
      const result = await scanFileWithVirusTotal(file);
      return res.json({success: true, type: "file", result});
    }

    if (url) {
      const result = await scanUrlWithVirusTotal(url);
      return res.json({success: true, type: "url", result});
    }

    return res
      .status(400)
      .json({success: false, error: "No file or URL provided."});
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({success: false, error: "Internal server error"});
  }
};
