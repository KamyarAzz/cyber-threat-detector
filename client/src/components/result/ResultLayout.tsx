import React from "react";
import ResultStatus from "./ResultStatus";
import {AnalysisResult} from "@/lib/types";
import Loader from "../Loader";

type Props = {result: AnalysisResult | null; isLoading: boolean};

export default function ResultLayout({isLoading, result}: Props) {
  return isLoading || result === null ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-2 items-center w-full dark:text-white">
      <ResultStatus
        message={result.result.message}
        isThreat={result.result.detected}
      />
    </div>
  );
}
