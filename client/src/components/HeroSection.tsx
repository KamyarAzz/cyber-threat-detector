"use client";

import React, {useState} from "react";
import InputForm from "@/components/InputForm";
import {AnalysisResult} from "@/lib/types";
import Result from "./Result";

export default function HeroSection() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <InputForm
        setResult={setResult}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      {result && <Result />}
    </main>
  );
}
