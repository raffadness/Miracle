import HeroImage from "../../../assets/Home/Hero.svg";
import Button from "../../../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col py-14 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center lg:w-1/2 lg:items-start lg:text-start">
          <p className="text-4xl font-medium md:text-5xl lg:text-6xl xl:text-7xl">
            Navigating the digital landscape for success
          </p>
          <img src={HeroImage} alt="Hero Images" className="w-3/4 lg:hidden" />
          <p className="text-lg lg:text-lg xl:text-4xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button className="w-fit rounded-xl bg-gray-900 px-4 py-3 text-gray-50 lg:rounded-xl lg:px-6 lg:text-xl xl:px-9 xl:py-4">
            Book a consultation
          </Button>
        </div>
        <div className="hidden w-full lg:block lg:w-1/2">
          <img src={HeroImage} alt="Hero Images" className="w-[90rem]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
