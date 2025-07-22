import {AnalysisResult} from "@/lib/types";
import React from "react";

type Props = {result: AnalysisResult | null; isLoading: boolean};

export default function Result({isLoading, result}: Props) {
  return isLoading || result === null ? (
    <p>Loading...</p>
  ) : (
    <div>Got the result</div>
  );
}
