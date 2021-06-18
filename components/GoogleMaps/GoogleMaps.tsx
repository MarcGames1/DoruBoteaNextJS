

export default function GoogleMaps() {

 
let gmap ="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Strada Iuliu Maniu 47 Brașov 500091&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

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
    <main className="mapouter">
          <main className="gmap_canvas">
            <iframe loading="lazy" className="gmap_iframe" width="100%" frameBorder="0" scrolling="no"
                  
                src={gmap} ></iframe>
          </main>
  
      </main>
    </>
  )
}






 