import FirstSection from "@/components/firstSection/firstSection";
import ServiciiContainer from "@/components/servicii/servicii-container";
import ConsultantaOnline from "@/components/ConsultantaOnline/consultantaOnline";
import "@/styles/Homepage.css";
const Homepage = () => {
  return (
    <main>
      <FirstSection />
      <ServiciiContainer />
      <ConsultantaOnline />
    </main>
  );
};

export default Homepage;
