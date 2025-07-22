import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function TextInput({value, onChange, disabled = false}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="url"
        className="text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        URL
      </label>
      <input
        disabled={disabled}
        id="url"
        type="url"
        value={value}
        onChange={onChange}
        placeholder="https://example.com/file.zip"
        className="border border-gray-400 dark:border-gray-200 rounded-lg px-4 py-2 bg-white dark:bg-[#1e1e1e] text-black dark:text-gray-100 placeholder-gray-200 dark:placeholder-gray-500 focus:outline-none focus:ring-2 dark:focus:ring-gray-500 focus:ring-gray-200"
      />
    </div>
  );
}
