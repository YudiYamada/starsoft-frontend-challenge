import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita otimizações do compilador para styled-components
  compiler: { styledComponents: true },

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
