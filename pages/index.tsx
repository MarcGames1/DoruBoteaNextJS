
import Head from 'next/head'
import {NextSeo} from 'next-seo'
import FirstSection from '../components/firstSection/firstSection'
import ServiciiContainer from '../components/servicii/servicii-container'
import ConsultantaOnline from '../components/ConsultantaOnline/consultantaOnline'




export default function Home() {

const title = "Avocat Brasov Doru Botea" 
const description = ""

  return (
    <>

      <NextSeo title = {title} description ={description}/>
      
      <FirstSection />
      <ServiciiContainer />
      <ConsultantaOnline />
      
      

<style global jsx>{`







body{

    display: flex;
    flex-direction: column;
  }
  
  header, section, .first-section, .second-section, #consultanta-online{
    margin: auto;
  }

  .content {
  
    position: relative;
    
    z-index: 0;
    
  }

  
  body, .first-section{
    background-blend-mode: darken;
    background-color: var(--transparent);
    background-image: url("/assets/images/background1.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  
  }
  
  .first-section .content:first-child{
    text-align: center;
  }


  .first-section .content{
    height: 100vh;
    font-family:var(--decorativeFont);
    align-items:center;
    position: relative;
    display: flex;
    width: var(--site-width);
    flex-direction: row;
    justify-items: center ;
    justify-content: center ;
    text-transform: uppercase;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  
  .dinamic{
    position: relative;
    display: block;
    color: var(--secondary-font-color);
  }
  
  .name{
    color:var(--secondary-font-color);
  }
  .specializari{
    border-bottom: solid 2px var(--secondary-font-color);
  }


  .hero-text{
    padding-bottom: 2rem;
  }
  .main-cta{
    letter-spacing: 1.1rem;
  }
    
  
  
  
  
  
  
  
  .second-section{
    display: flex;
    flex-flow:column nowrap;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    background-image: url(/assets/images/section2\ background.webp);

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  
  .cards{
    width: 100%;
    height: auto;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-self: center;
  
    margin: auto;
    
    gap: 5px;
    
    
    font-family: var(--decorativeFont);
  }

  #servicii{
    
    padding-bottom: 2em;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-self: center;
    align-items: center;
    width: 100%;
    text-align: center;
    text-shadow: 10px 10px 5px var(--transparent);

    margin-top: 10%;
  
    z-index: 0;
    background-color: var(--primary-color-transparent);
    background-attachment: fixed;
    overflow-x: hidden;
    
    
  }
  
  .servicii-btn{
    background-color: var(--primary-color-transparent);
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
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .section-head, .section-title {
    overflow-wrap: normal;

    display: block;
    text-align: center;
   color: var( --secondary-font-color);
   
  }


  .mapouter{
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  
  .transparent-card {
   
    
      background-color:transparent;
    
    }

{/* BUTTONS */}

.btn1 {		
	z-index: 2;
	position: relative;	
	padding: 1.4rem 1rem;
	color: var(--primary-font-color);

	transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
	cursor: pointer;
	user-select: none;
	text-align: center;
}

.btn1:before, .btn1:after {
	content: '';
	position: absolute;	
	transition: inherit;
	z-index: -1;
}

.btn1:hover {
	color: var(--def);
}

.btn1:hover:before {
	
	transition-delay: 0s;
}

.btn1:hover:after {
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
align-self: center;
align-items: center;
text-transform: capitalize;
font-size: 2em;



background: var(--secondary-font-color);
transition-delay: .35s;

}

.btn1:hover:after .servicii{
	content: 'aflati mai multe';
	background: var(--secondary-font-color);
	transition-delay: .35s;
	
}


.from-top:before, 
.from-top:after {
	left: 0;
	height: 0;
	width: 100%;
}

.from-top:before {
	bottom: 0;	
	border: 1px solid var(--secondary-font-color);
	border-top: 0;
	border-bottom: 0;
}

.from-top:after {
	top: 0;
	height: 0;
}

.from-top:hover:before,
.from-top:hover:after {
	height: 100%;
}



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



.from-right:before, 
.from-right:after {
	top: 0;
	width: 0;
	height: 100%;
}

.from-right:before {
	left: 0;
	border: 1px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;	
}

.from-right:after {
	right: 0;
}

.from-right:hover:before,
.from-right:hover:after {
	width: 100%;
}



.from-center:before {
	top: 0;
	left: 50%;
	height: 100%;
	width: 0;
	border: 3px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;
}

.from-center:after {
	bottom: 0;
	left: 0;
	height: 0;
	width: 100%;
	background: var(--secondary-font-color);
}

.from-center:hover:before {
	left: 0;
	width: 100%;
}

.from-center:hover:after {
	top: 0;
	height: 100%;
}



.from-bottom:before, 
.from-bottom:after {
	left: 0;
	height: 0;
	width: 100%;
}

.from-bottom:before {
	top: 0;	
	border: 3px solid var(--secondary-font-color);
	border-top: 0;
	border-bottom: 0;
}

.from-bottom:after {
	bottom: 0;
	height: 0;
}

.from-bottom:hover:before,
.from-bottom:hover:after {
	height: 100%;
	width: 100%;
}


.from-center:hover::before,
.from-center:hover::after{
	content: '';

}
.from-center:hover span{
display: hidden;
z-index: -9;
}

#whatsappimg{
height: auto;
width: 48px;

}

.whatsapp-cta div a {

	flex-flow: column nowrap;
	margin: auto;
}
.buttonTop{
	padding: 1em;
	transform-origin: center;
	border-radius: 35px;
	height: auto;
	max-height: 3rem;
	width: 3rem;
	background-color: rgba(0, 0, 0, 0.8);
	
  position: fixed;
  bottom: 10%;
  right: 0;
 
  
  z-index: 14;
  
}

.buttonTop:hover{background-color: rgba(0, 0, 0, 0.8);}
.buttonTop img{
	transition: transform;
	transition-duration: .5s;
	transform-origin: center;
	margin: auto;
}
.buttonTop:hover img{
	transform: scale(1.3);
}


`}</style>

</>










  )
}
