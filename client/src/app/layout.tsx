import type {Metadata} from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Cyber Threat Detector",
  description: "Created By Kamyar Azizi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="antialiased h-full">{children}</body>
    </html>
  );
}
