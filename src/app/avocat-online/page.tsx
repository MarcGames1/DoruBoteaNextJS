import { Metadata } from "next";
import Text from "@/components/ConsultantaOnlinePage/text";
import GoogleMaps from "@/components/GoogleMaps/GoogleMaps";
import React from "react";
import ContactCenter from "@/components/ConsultantaOnline/Form/contactCenter";

export const metadata: Metadata = {
  title: "Avocat Online Consultanta Juridica Online ⚖️ Avocat Doru Botea",
  description:
    "Beneficiaza de Consultanta juridica online prin Whatsapp cu onorarii decente. ✅ Afla care este rezolvarea problemelor tale juridice ✅ Programeaza-te acum",
};
const AvocatOnlinePage = () => {
  return (
    <>
      <div className=" text-white bg-black container-fluid">
        <div className="parallax"></div>
        <br />
        <div className="row">
          <div className=" offset-1 offset-md-0 offset-lg-0 col order-first col-md-6 order-lg-last order-md-last col-lg-6 col-10 ">
            <Text />
            <br />
          </div>
          <div className="offset-1 offset-md-0 offset-lg-0 col order-last col-md-6 order-lg-first order-md-first col-lg-6 col-10 ">
            <ContactCenter />
          </div>
        </div>
      </div>
    </>
  );
};
export default AvocatOnlinePage;
