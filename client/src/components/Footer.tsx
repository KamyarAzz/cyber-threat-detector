"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-center text-sm text-gray-500 md:py-6 pt-3 border-t border-gray-200">
      © 2025 Kamyar Azizi. Licensed under the{" "}
      <a
        href="https://opensource.org/licenses/MIT"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-black transition-colors"
      >
        MIT License
      </a>
      . Version {process.env.NEXT_PUBLIC_APP_VERSION}
    </footer>
  );
}
