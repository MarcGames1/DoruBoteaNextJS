import React from "react";
import NavBar from "@/components/navbar/";
import Footer from "@/components/Footer/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
