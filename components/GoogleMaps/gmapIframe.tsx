import React, { useEffect, useState } from "react";

 const GmapIframe= (gmap) => {

  
   

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