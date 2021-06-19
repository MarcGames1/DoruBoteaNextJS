import React, { useEffect, useState } from "react";

 const GmapIframe= () => {

  const gmap = "https://maps.google.com/maps?q=StradaI%20uliuManiu%2047%20Bra%C8%99ov%20500091&t=&z=15&ie=UTF8&iwloc=&output=embed"
   

    return(
  
      <iframe  
      className="gmap_iframe" 
      width="100%" 
      frameBorder="0" 
      scrolling="no"
                  
      src={gmap} >

      </iframe>
      
      )
    }

  export default GmapIframe