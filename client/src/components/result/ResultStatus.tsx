import React from "react";
import {ShieldCheck, TriangleAlert} from "lucide-react";

type Props = {isThreat: boolean; message: string};

export default function ResultStatus({isThreat, message}: Props) {
  return (
    <div className="flex gap-8 justify-between items-center">
      <p className="text-lg">{message}</p>
      {isThreat ? (
        <TriangleAlert className="w-10 h-10 text-red-600" />
      ) : (
        <ShieldCheck className="w-10 h-10 text-green-600" />
      )}
    </div>
  );
}
