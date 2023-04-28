import { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css'
import React, { useState } from 'react';
import ConsoleMessage from '../scripts/console'



import Head from 'next/head'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/footer';
import WhatsappSticky from '../components/svgComponents/stickyWhatsapp';
import UpArrow from '../components/svgComponents/uparrow';
import { Button } from 'react-bootstrap';
import Phone from '../components/svgComponents/phone';



// <Component {...pageProps}  />
// <Spinner  animation="border" variant="secondary" />

const MyApp=({ Component, pageProps }:AppProps) =>{
  




  //blog state for similar articles filter

  const [filter, setFilter]= useState('toate categoriile')
  const changeFilter = (newFilter :string)=>{setFilter(newFilter)}
  
  // const updateBlogs = (blogs :object)=>{setBlogs(blogs); console.log('updated Blogs Globally')}
const color = 'white'
ConsoleMessage()
  return  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
    <link rel="manifest" href="/manifest.json" />
    </Head>    
    <Navbar/>
    <WhatsappSticky />
    <UpArrow />
  <Component {...pageProps}
  filter = {filter}
  // blogs = {blogs}
  // updateBlogs={updateBlogs}
  changeFilter={changeFilter}
  />
  <Button className='vw-100 d-sm-block d-lg-none d-md-none' href="tel:+40744312032"id='sticky-phone' variant="success"  size="lg" block>
    <Phone color={'white'} /> Sunati Acum
  </Button>
  <Footer />

  <style global jsx>{`
    #sticky-phone{
      position:fixed;
      z-index:999999999999;
      bottom:0;
    }
    
    `}</style>
</>
}
   

export default MyApp
