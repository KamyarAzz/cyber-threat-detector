import type {NextConfig} from "next";
import {version} from "./package.json";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
};

export default nextConfig;
