import React, {forwardRef} from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = forwardRef<HTMLInputElement, Props>(({onChange}, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="file"
        className="text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        Or Upload File
      </label>
      <input
        id="file"
        ref={ref}
        type="file"
        accept="*/*"
        onChange={onChange}
        className="file:mr-4 dark:text-white text-black file:bg-blue-600 file:cursor-pointer file:py-2 file:px-4 file:border-0 file:text-white file:rounded-lg hover:file:bg-blue-900 file:transition-colors"
      />
    </div>
  );
});

export default FileInput;
