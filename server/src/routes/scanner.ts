import express from "express";
import multer from "multer";
import {handleScan} from "../controllers/scanController";

const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});

router.post("/scan", upload.single("file"), handleScan);

export default router;
