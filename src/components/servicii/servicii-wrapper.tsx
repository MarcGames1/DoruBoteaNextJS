import React from "react";

import servicii from "./date/servicii";

import ServiciiCard, { ServiciiCardProps } from "./serviciiCard";

import dynamic from "next/dynamic";

function ServiciiWrapper() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          {servicii.map(({ id, ...otherSectionProps }: ServiciiCardProps) => (
            <ServiciiCard id={id} key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(ServiciiWrapper), { ssr: false });
