"use client";
import React from "react";
import GmapIframe from "./gmapIframe";

export default function GoogleMaps() {
  return (
    <>
      <style jsx>
        {`
          .mapouter {
            grid-column: 1 / 4;
            grid-row: 2 / 3;
            position: relative;
            text-align: right;
            width: 100%;
            height: 400px;
          }

          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }

          .gmap_iframe {
            height: 400px !important;
          }
        `}
      </style>
      <main className="mapouter">
        <main className="gmap_canvas">
          <GmapIframe />
        </main>
      </main>
    </>
  );
}
