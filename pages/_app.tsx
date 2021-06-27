import { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css'
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

import Head from 'next/head'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/footer';


// <Component {...pageProps}  />
// <Spinner  animation="border" variant="secondary" />

const MyApp=({ Component, pageProps }:AppProps) =>{
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
    <link rel="manifest" href="/manifest.json" />
    </Head>    
  <Component {...pageProps} />
</>
}

export default MyApp
