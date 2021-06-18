
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/main.css'
import '../styles/typography.css'
import '../styles/responsive.css';
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/footer';

// <Component {...pageProps}  />
// <Spinner  animation="border" variant="secondary" />

function MyApp({ Component, pageProps }) {
 

      return(
    <>
    <Header />
    <Navbar />
    <Component {...pageProps}  />
     
  <Footer />
    

  </>
  )
}



  

  


export default MyApp
