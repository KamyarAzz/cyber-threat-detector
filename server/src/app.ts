import express from "express";
import cors from "cors";
import scannerRoutes from "./routes/scanner";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", scannerRoutes);

export default app;
