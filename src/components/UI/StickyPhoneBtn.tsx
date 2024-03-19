"use client";
import { Button } from "react-bootstrap";
import Phone from "@/components/svgComponents/phone";
import React from "react";

const StickyPhoneBtn = () => {
  return (
    <Button
      className="vw-100 d-sm-block d-lg-none d-md-none"
      href="tel:+40744312032"
      id="sticky-phone"
      variant="success"
      size="lg"
    >
      <Phone /> Sunati Acum
    </Button>
  );
};
export default StickyPhoneBtn;
