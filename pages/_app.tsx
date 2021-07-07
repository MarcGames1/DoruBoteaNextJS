import { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css'
import React, { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module';

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

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P4QDK6G' });
  }, []);




  //blog state for similar articles filter

  const [filter, setFilter]= useState('toate categoriile')
  const changeFilter = (newFilter :string)=>{setFilter(newFilter)}
  const [blogs, setBlogs] = useState({})
  // const updateBlogs = (blogs :object)=>{setBlogs(blogs); console.log('updated Blogs Globally')}


  return  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
    <link rel="manifest" href="/manifest.json" />
    <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          

          <script  dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
            `,
          }}
        />
    </Head>    
    <Navbar/>
  <Component {...pageProps}
  filter = {filter}
  // blogs = {blogs}
  // updateBlogs={updateBlogs}
  changeFilter={changeFilter}
  />
  <Footer />
</>
}
   

export default MyApp
