import React from "react";

const FirstSectionButton = ()=>{
    
    return(
        <>
        <a className="main-cta btn btn1 from-left" href="#servicii">vedeti mai multe</a>

        <style global jsx>{`
        .from-left:before, 
.from-left:after {
	top: 0;
	width: 0;
	height: 100%;
}

.from-left:before {
	right: 0;
	border: 1px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;	
}

.from-left:after {
	left: 0;
}

.from-left:hover:before,
.from-left:hover:after {
	width: 100%;
}
             `}</style>
        </>
    )
}

export default FirstSectionButton