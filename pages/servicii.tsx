import React from "react"
import ServiciiContainer from "../components/servicii/servicii-container"

const Servicii = ()=>{

    return  (<>


<ServiciiContainer />


<style global jsx>{` 
    body{
    background-color:black !important;
    }
.servicii-btn{
    background-color: var(--primary-color-transpar);
    color: var(--primary-font-color);
   
  }
  
   .servicii-btn, .servicii-btn:hover{
    max-width: 100%;
    min-width: 250px;
   } 
  
  .servicii-btn span{
    font-size: 0.7rem;
    font-weight: bold;
  }
  

  
  
  .servicii-detalii{
    margin: auto;
    margin-right: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-self: center;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 2em;
  }
  
  .first-section, .servicii-detalii{
    background-color: var(--transparent);
  }
  
  .section-img{
    height: 40vh;
   
  }


  .section-title{
    margin-top: 1.5rem;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  .section-head, .section-title {
    overflow-wrap: normal;

    display: block;
    text-align: center;
   color: var( --secondary-font-color);
   
  }




  
  .transparent-card {
   
    
      background-color:transparent;
    
    }
    `}</style>
    </>)
}


export default Servicii