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
    <html
      className="h-full dark:bg-dark-background bg-light-background"
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Cyber Threat Detector helps identify and mitigate online threats in real-time."
        />
        <meta name="author" content="Kamyar Azizi" />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, online security, malware, phishing, Cyber Threat Detector"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased h-full">{children}</body>
    </html>
  );
}
