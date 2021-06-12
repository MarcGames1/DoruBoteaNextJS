

// import  '../styles/.main.scss'
// import '../styles/main.scss'
import {NextSeo} from 'next-seo'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/Footer/footer'
import FirstSection from '../components/firstSection/firstSection'
import ConsultantaOnline from '../components/ConsultantaOnline/consultantaOnline'
import ServiciiContainer from '../components/servicii/servicii-container'
import { useState } from 'react'

export default function Home() {

const title = "Avocat" 
const description = ""

  return (
    <>

      <header />
      <NextSeo title = {title} description ={description}/>
      <NavBar />
      <FirstSection />
      <ServiciiContainer />
      <ConsultantaOnline />
      <Footer />
    </>














  )
}
