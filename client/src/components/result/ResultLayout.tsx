import React from "react";
import ResultStatus from "./ResultStatus";
import Loader from "../Loader";
import {ScanApiResponse} from "@/lib/types";

type Props = {result: ScanApiResponse | null; isLoading: boolean};

export default function ResultLayout({isLoading, result}: Props) {
  return isLoading || result === null ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-6 items-center w-full dark:text-white ">
      <ResultStatus
        message={result.error ? result.error : result.result.message}
        isThreat={result.result.detected}
      />
      <div className="w-full justify-start gap-4 flex flex-col">
        {result.result.url && (
          <div className="flex flex-col gap-0.5">
            <p className="dark:text-gray-500 text-gray-600">URL</p>
            <p>{result.result.url}</p>
          </div>
        )}
        {/* {result.result.filename && (
          <div className="flex flex-col gap-0.5">
            <p className="dark:text-gray-500 text-gray-600">File name</p>
            <p>{result.result.filename}</p>
          </div>
        )}
        {result.result.status && (
          <div className="flex flex-col gap-0.5">
            <p className="dark:text-gray-500 text-gray-600">Status</p>
            <p>{result.result.status}</p>
          </div>
        )} */}
        {/* {result.result.size && (
          <div className="flex flex-col gap-0.5">
            <p className="dark:text-gray-500 text-gray-600">File size</p>
            <p>{result.result.size} KB</p>
          </div>
        )}
        {result.result.mime && (
          <div className="flex flex-col gap-0.5">
            <p className="dark:text-gray-500 text-gray-600">Mime</p>
            <p>{result.result.mime}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
