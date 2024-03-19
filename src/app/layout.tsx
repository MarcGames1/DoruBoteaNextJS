import { GoogleTagManager } from "@next/third-parties/google";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";
// import ConsoleMessage from '../scripts/console'
// import UpArrow from '../components/svgComponents/uparrow';
// import { Button } from 'react-bootstrap';
// import Phone from '../components/svgComponents/phone';
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import React from "react";

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
    <html lang="ro">
      <body className={`${font.className} `}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
          <link rel="manifest" href="/manifest.json" />
        </head>
        {children}
        <GoogleTagManager gtmId={process.env?.GTM_TAG || ""} />
      </body>
    </html>
  );
}
