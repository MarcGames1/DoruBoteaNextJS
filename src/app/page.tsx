import FirstSection from "@/components/firstSection/firstSection";
import ServiciiContainer from "@/components/servicii/servicii-container";
import ConsultantaOnline from "@/components/ConsultantaOnline/consultantaOnline";
import "@/styles/Homepage.css";
const Homepage = () => {
  return (
    <>
      <FirstSection />
      <ServiciiContainer />
      <ConsultantaOnline />
    </>
  );
};

export default Homepage;
