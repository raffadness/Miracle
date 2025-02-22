import CTAlogo from "../../../assets/Home/CTA.svg";
import Button from "../../../components/Button";

const CTA = () => {
  return (
    <>
      <div className="relative flex w-full items-center py-14">
        <div className="flex w-full flex-col justify-start gap-10 rounded-4xl bg-gray-200 p-12 text-center lg:text-start">
          <p className="text-4xl font-medium">Let’s make things happen</p>
          <p className="w-full lg:w-1/3">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button className="w-full rounded-xl bg-gray-900 px-12 py-4 text-xl text-white lg:w-fit">
            Get your free proposal
          </Button>
        </div>
        <img
          src={CTAlogo}
          alt="Call to action image"
          className="h-f absolute hidden lg:right-20 lg:block xl:right-44"
        />
      </div>
    </>
  );
};

export default CTA;
