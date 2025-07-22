import {Request, Response} from "express";
import {scanFile} from "../services/fileScanner";
import {scanUrl} from "../services/urlScanner";

export const handleScan = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const url = req.body.url;

    if (file) {
      const result = await scanFile(file);
      return res.json({type: "file", result});
    }

    if (url) {
      const result = await scanUrl(url);
      return res.json({type: "url", result});
    }

    return res.status(400).json({error: "No file or URL provided."});
  } catch (err) {
    console.error(err);
    return res.status(500).json({error: "Internal server error"});
  }
};
