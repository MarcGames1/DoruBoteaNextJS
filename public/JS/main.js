// const textContent = [" drept penal", " dreptul familiei", " drept civil",  " malpraxis medical", " dreptul muncii", " executari silite" ]
// let index = 0


// function changeText(){
//     (index < textContent.length-1) ? index++ : index=0;
//    ( document.querySelector(".dinamic").innerText = !null) ? document.querySelector(".dinamic").innerText= textContent[index] : return
// }
// setInterval(changeText, 3000);



// Scroll observer si afisarea conditionata a elementelor


// stocam elementele care ne intereseaza a fi observate si cele care se vor modifica  in variabile
const whatsapp = document.querySelector('.whatsapp-cta')
const upArrow= document.querySelector(".buttonTop")
const sections = document.querySelectorAll("section")

// Parametru Options si Functia Observer

const options = {
    root: null,
    rootMargin: "0%",
    treshold: [ 0, 0.25, 0.5, 0.75, 1,]
  
  };
  
  const observer = new IntersectionObserver( (entries, observer) =>{
    entries.forEach(entry =>{
        
        let viewPortSectionClass = entry.target.className
         if(!entry.isIntersecting) {
           console.log(`${viewPortSectionClass} is NOT intersecting!`)
         }
         
        else if(!viewPortSectionClass) {
          console.log(entry)
        }
         
         
         else{
           console.log(`${viewPortSectionClass} is  intersecting!`)
           CheckSection(viewPortSectionClass)
         }
       })
     }, options);
 

// aici se apeleaza observer daca query selector ne intoarce mai multe elemente folosim foreach, /element este variabia definita la inceput  observer.observe(/element)
sections.forEach(section =>{
    observer.observe(section)
  })


  function removeClassOnElement (element, className)  {element.classList.remove(className)}
  function addClassOnElement (element, className)  {element.classList.add(className)}

  function CheckSection(elementClass){
      switch(elementClass){
        case "first-section":
          removeButtons();
         console.log("FIRST SECTION AICI AR TREBUI SA SE RESTRANGA HEADERUL SI SA RAMANA BARA A 2-a") 
          break;
        case "second-section":
          
          console.log("second-section AICI TREBUIE SA APARA BUTONUL WHATSAP SAGEATA IN SUS SI DIVUL ROSU")
          addButtons();
          break;
          case "servicii-detalii":
            // AnimateProjectsSection(projects)
            console.log(" PARAMETER IS "+ elementClass)
            break;
            
        default:
          return
      }
  }

function addButtons() {
  removeClassOnElement(upArrow, "hidden");
  removeClassOnElement(whatsapp, "hidden");
  addClassOnElement(upArrow, "appearFirstR");
  // addClass(whatsapp, "appearSecondR");
}

function removeButtons() {
  addClassOnElement(upArrow, "hidden");
  addClassOnElement(whatsapp, "hidden");
}
