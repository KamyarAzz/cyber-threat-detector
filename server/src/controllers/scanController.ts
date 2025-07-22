import {Request, Response} from "express";
import {
  scanFileWithVirusTotal,
  scanUrlWithVirusTotal,
} from "../services/virusTotal";

export const handleScan = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[] | undefined;
    const url = req.body.url;

    if (files && files.length > 0) {
      const file = files[0];
      const result = await scanFileWithVirusTotal(file);
      return res.json({type: "file", result});
    }

    if (url) {
      const result = await scanUrlWithVirusTotal(url);
      return res.json({type: "url", result});
    }

    return res.status(400).json({error: "No file or URL provided."});
  } catch (err) {
    console.error(err);
    return res.status(500).json({error: "Internal server error"});
  }
};
