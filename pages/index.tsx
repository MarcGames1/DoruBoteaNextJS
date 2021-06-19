
import Head from 'next/head'
import {NextSeo} from 'next-seo'
import FirstSection from '../components/firstSection/firstSection'
import ServiciiContainer from '../components/servicii/servicii-container'
import ConsultantaOnline from '../components/ConsultantaOnline/consultantaOnline'




export default function Home() {

const title = "Avocat Brasov Doru Botea" 
const description = ""
const imageUrl = 'assets/images/background1.jpg'
  return (
    <>
<Head> 
  <link
    rel="preload"
    href={imageUrl}
    as="image"
  />
</Head>
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
    background-image: url("/assets/images/background1.jpg");
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
    color:var(--secondary-font-color)
  }
  .specializari{
    border-bottom: solid 1px var(--secondary-font-color);
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
    background-image: url(/assets/images/section2\ background.jpg);

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


`}</style>

</>










  )
}
