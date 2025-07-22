export type AnalysisResult = {
  type: string;
  result: {
    url: string;
    status: number;
    contentType: string;
    detected: boolean;
    message: string;
  };
};
