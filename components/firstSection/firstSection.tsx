
import { useState } from "react"

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
            <div className="appearFirstL">

                
                <h1 className="hero-text">
                    Avocat <span className="name">Doru Botea</span>
                    <br className="line" />
                    <span className="specializari">Profesionalism si Incredere</span>
                    <span className="dinamic">{state}</span>
                </h1>

                <a className="main-cta btn from-left" href="#servicii">vedeti mai multe</a>

            </div>
        </div>

    </section>  
      )
}

export default FirsSection