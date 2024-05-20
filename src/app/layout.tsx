import { GoogleTagManager } from "@next/third-parties/google";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import React from "react";
import { CookiesProvider } from "next-client-cookies/server";
import DefaultConsentState from "@/components/DefaultConsentState";

const font = Poppins({
  weight: ["100", "400", "200", "300", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avocat Brasov ⚖ Doru Botea",
  description:
    "Avocat Doru Botea lupta pana la capat gasind✅cele mai bune solutii in conditiile legii pentru ca drepturile si libertatile dumneavoastra sa fie respectate",
  metadataBase: new URL("https://www.avocatdorubotea.ro/"),
  manifest: "/manifest.json",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  //     TODO ADD OPEN GRAPH
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <DefaultConsentState>
        <html lang="ro">
          <body className={`${font.className} `}>
            {children}
            <GoogleTagManager gtmId={process.env?.GTM_TAG || ""} />
          </body>
        </html>
      </DefaultConsentState>
    </CookiesProvider>
  );
}
