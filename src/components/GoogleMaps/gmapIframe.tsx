import React, { useEffect, useState } from "react";

 const GmapIframe= () => {

  const gmap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.5015978059891!2d25.60523937199159!3d45.650757577371465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b812189f3d5%3A0xb1aaceb6731f1813!2sAvocat%20Brasov%20Doru%20Botea!5e0!3m2!1sro!2sro!4v1626587764996!5m2!1sro!2sro"
   

    return(
  
      <iframe  
      loading="lazy"
      className="gmap_iframe" 
      width="100%" 
      frameBorder="0" 
      scrolling="no"
                  
      src={gmap} >

      </iframe>
      // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.5015978059891!2d25.60523937199159!3d45.650757577371465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b812189f3d5%3A0xb1aaceb6731f1813!2sAvocat%20Brasov%20Doru%20Botea!5e0!3m2!1sro!2sro!4v1626587764996!5m2!1sro!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      )
    }

  export default GmapIframe