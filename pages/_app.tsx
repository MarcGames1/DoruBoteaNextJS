
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css' 

import React, { useState, useEffect } from 'react';


import Head from 'next/head'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/footer';

// <Component {...pageProps}  />
// <Spinner  animation="border" variant="secondary" />

function MyApp({ Component, pageProps }) {
 

      return(
    <>
    
    <Navbar />
    <Component {...pageProps}  />
     
  <Footer />
    

  </>
  )
}



  

  


export default MyApp
