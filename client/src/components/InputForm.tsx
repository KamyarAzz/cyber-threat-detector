"use client";

import {useRef, useState} from "react";
import axios from "axios";
import TextInput from "./inputs/TextInput";
import FileInput from "./inputs/FileInput";
import {AnalysisResult} from "@/lib/types";
import {toast} from "react-toastify";

type Props = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: (result: AnalysisResult | null) => void;
};

export default function InputForm({setResult, isLoading, setIsLoading}: Props) {
  const [url, setUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUrl("");
    } else {
      setFile(null);
    }
  };

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult(null);
    if (!file && !url.trim()) {
      toast("Please enter a URL or select a file.");
      return;
    }
    setIsLoading(true);
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/scan`,
          formData,
          {headers: {"Content-Type": "multipart/form-data"}}
        );
        setResult(response.data);
      } else if (url.trim()) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/scan`,
          {url: url.trim()},
          {headers: {"Content-Type": "application/json"}}
        );
        setResult(response.data);
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      toast("An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white md:min-w-[450px] dark:bg-[#131313] shadow-md dark:shadow-lg rounded-2xl p-6 flex flex-col gap-4 md:gap-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
        Submit a File or URL to Scan
      </h2>
      <TextInput disabled={isLoading} onChange={handleURLChange} value={url} />
      <FileInput
        disabled={isLoading}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button
        disabled={(url === "" && file === null) || isLoading}
        type="submit"
        className="mt-4 disabled:cursor-default disabled:bg-gray-400 dark:disabled:bg-gray-600 cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors"
      >
        Scan
      </button>
    </form>
  );
}
