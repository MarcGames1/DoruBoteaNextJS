import React, { useEffect, useState } from "react";
import GmapIframe from "./gmapIframe";


export default function GoogleMaps() {
  const [loading, stillLoading] = useState(true)
  const finishLoading = () => {
      // alert('finished loading')
      stillLoading(false)
  }

  useEffect(() => {
    onload = finishLoading
  
  }, [])

  const gmap = "https://maps.google.com/maps?q=StradaI%20uliuManiu%2047%20Bra%C8%99ov%20500091&t=&z=15&ie=UTF8&iwloc=&output=embed"
  
  console.log(gmap)
 

  return(
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
    <main  className ="mapouter">
          <main className="gmap_canvas">
           <GmapIframe gmap={gmap} state={loading} />
          </main>
  
      </main>
    </>
  )
}






 