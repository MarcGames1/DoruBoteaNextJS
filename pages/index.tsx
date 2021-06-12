

// import  '../styles/.main.scss'
// import '../styles/main.scss'
import Header from '../components/header/header'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/Footer/footer'
import FirstSection from '../components/firstSection/firstSection'
import ConsultantaOnline from '../components/ConsultantaOnline/consultantaOnline'
import ServiciiContainer from '../components/servicii/servicii-container'
export default function Home() {
  return (
    <>
    
      
  
    <div>
      <Header />
      <NavBar/>
      <FirstSection />
      <ServiciiContainer />
      <ConsultantaOnline />
      <Footer />
    </div>
    </>
  )
}
