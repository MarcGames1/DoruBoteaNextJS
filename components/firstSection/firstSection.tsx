import React from "react";

import { useState } from "react"
import Button from "../Button";

let currentText =""
let index = 0;
const textContent = [" drept penal", " dreptul familiei", " drept civil",  " malpraxis medical", " dreptul muncii", " executari silite" ];



function FirsSection(){
    const [state, setState]=useState(textContent[0])
    
    
    const changeText = ()=>{
        (index < textContent.length-1) ? index++ : index=0;
        currentText =  textContent[index]
        setState(currentText)
    }
    setTimeout(changeText, 3000);
        
    return(
        <section className="first-section" id="top">
        <div className="content">
            <div>

                
                <h2 className="mb-4 hero-text">
                    Avocat <span className="name">Doru Botea</span>
                    <br className="my-4 d-block line" />
                    <span className="my-4 d-block specializari ">Profesionalism si Incredere</span>
                    <span className="d-block mt-4 dinamic">{state}</span>
                </h2>
                
               <Button class="main-cta" text="Vedeti Mai Multe" href={'#servicii'}/>

            </div>
        </div>

    </section>  
      )
}

export default FirsSection