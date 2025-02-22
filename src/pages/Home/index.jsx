import Header from "../../components/Header";
import Case from "./Section/Case";
import CTA from "./Section/CTA";
import Hero from "./Section/Hero";
import Logo from "./Section/Logo";
import Process from "./Section/Process";
import Services from "./Section/Services";
import Team from "./Section/Team";
import Testi from "./Section/Testi";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Logo />
      <Services />
      <CTA />
      <Case />
      <Process />
      <Team />
      <Testi />
    </>
  );
};

export default Home;
