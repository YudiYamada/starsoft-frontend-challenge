import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita otimizações do compilador para styled-components
  compiler: { styledComponents: true },

  // Habilita o novo compilador React
  reactCompiler: true,

  // Configuração para permitir imagens externas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "softstar.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
