// components/ScanStatsChart.tsx
"use client";

import {EngineCategory, EngineResultsStats} from "@/lib/types";
import React from "react";

type Props = {
  stats: EngineResultsStats;
};

const colors: Record<EngineCategory, string> = {
  malicious: "bg-red-500",
  suspicious: "bg-yellow-400",
  undetected: "bg-gray-400",
  harmless: "bg-green-500",
  timeout: "bg-blue-400",
  "confirmed-timeout": "bg-blue-500",
  failure: "bg-red-700",
  "type-unsupported": "bg-purple-500",
};

const Lables: Record<EngineCategory, string> = {
  malicious: "Malicious",
  suspicious: "Suspicious",
  undetected: "Undetected",
  harmless: "Harmless",
  timeout: "Timeout",
  "confirmed-timeout": "Confirmed Timeout",
  failure: "Failure",
  "type-unsupported": "Type Unsupported",
};

export default function ResultUrlStats({stats}: Props) {
  const total = Object.values(stats).reduce((acc, val) => acc + val, 0);

  return (
    <div className="w-full max-w-xl mx-auto mt-2">
      <h4 className="dark:text-gray-500 text-gray-600 mb-0.5 text-start">
        Engine Results Breakdown
      </h4>
      <div className="flex h-6 rounded overflow-hidden shadow-sm">
        {(Object.keys(stats) as EngineCategory[]).map((key) => {
          const percentage = (stats[key] / total) * 100;
          return (
            <div
              key={key}
              className={`${colors[key]} h-full`}
              style={{width: `${percentage}%`}}
              title={`${Lables[key]}: ${stats[key]} (${percentage.toFixed(
                1
              )}%)`}
            />
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-600">
        {(Object.keys(stats) as EngineCategory[]).map((key) => {
          const percentage = (stats[key] / total) * 100;
          return (
            <div key={key} className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 min-w-3 min-h-3 rounded-sm ${colors[key]}`}
              />
              <span>{Lables[key]}:</span>
              <span className="ml-auto font-medium">
                {percentage.toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
