"use client";

import React, {useState} from "react";
import InputForm from "@/components/InputForm";
import ResultLayout from "./result/ResultLayout";
import {AnalysisResult} from "@/lib/types";

export default function HeroSection() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex flex-col h-full w-min mx-auto gap-[32px] row-start-2 items-center sm:items-start">
      <InputForm
        setResult={setResult}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      {(result || isLoading) && (
        <ResultLayout result={result} isLoading={isLoading} />
      )}
    </main>
  );
}
