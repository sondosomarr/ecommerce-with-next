import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tailwindcss.com","fakestoreapi.com"], // Add the allowed hostname(s) here
  },
};

export default nextConfig;
