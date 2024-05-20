import React from "react";
import NavBar from "@/components/navbar/";
import Footer from "@/components/Footer/footer";
import WhatsappSticky from "@/components/svgComponents/stickyWhatsapp";
import UpArrow from "@/components/svgComponents/uparrow";
import StickyPhoneBtn from "@/components/UI/StickyPhoneBtn";
import ConsentBanner from "@/components/ConsentBanner/ConsentBanner";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <WhatsappSticky />
      <UpArrow />
      {children}
      <StickyPhoneBtn />
      <ConsentBanner />
      <Footer />
    </>
  );
}
