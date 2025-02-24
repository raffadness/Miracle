import Case from "./Section/Case";
import Contact from "./Section/Contact";
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
      <div className="px-5 md:px-8 lg:px-24 xl:px-40">
        <Hero />
        <Logo />
        <Services />
        <CTA />
        <Case />
        <Process />
        <Team />
        <Testi />
        <Contact />
      </div>
    </>
  );
};

export default Home;
