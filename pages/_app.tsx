// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import '../styles/main.css'
import '../styles/typography.css'
import '../styles/responsive.css';
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/footer';




function MyApp({ Component, pageProps }) {
  const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);
  return(
    <>
    <Header />
    <Navbar />
   <Component {...pageProps} />
  <Footer />
  </>
  )
}



  

  


export default MyApp
