export type AnalysisResult = {
  type: "file" | "url";
  result: {
    filename: string;
    mime: string;
    size: number;
    url: string;
    status: number;
    contentType: string;
    detected: boolean;
    message: string;
  };
};
