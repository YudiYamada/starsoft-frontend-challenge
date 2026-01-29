import { Providers } from "@/components/providers";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StarSoft NFT",
  description: "Marketplace de NFTs exclusivos da StarSoft",
  openGraph: {
    title: "StarSoft NFT",
    description: "Compre e venda NFTs exclusivos da StarSoft",
    url: "https://starsoft-nft.com",
    siteName: "StarSoft NFT",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "StarSoft NFT Marketplace",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarSoft NFT",
    description: "Compre e venda NFTs exclusivos da StarSoft",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}`}>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
