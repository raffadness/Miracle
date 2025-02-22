import Button from "../../../components/Button";
import Card from "../../../components/Card";
import SEO from "../../../assets/Home/Illustration.svg";
import b from "../../../assets/Home/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg";
import c from "../../../assets/Home/tokyo-many-browser-windows-with-different-information 1.svg";
import d from "../../../assets/Home/tokyo-selecting-a-value-in-the-browser-window 1.svg";
import e from "../../../assets/Home/tokyo-sending-messages-from-one-place-to-another 1.svg";
import f from "../../../assets/Home/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const CardContent = [
    {
      id: 1,
      text1: "Search engine",
      text2: "optimization",
      image: SEO,
      class: "bg-gray-100",
      textclass: "bg-light-green",
    },
    {
      id: 2,
      text1: "Pay-per-click",
      text2: "advertising",
      image: d,
      class: "bg-light-green",
      textclass: "bg-white",
    },
    {
      id: 3,
      text1: "Social Media",
      text2: "Marketing",
      image: b,
      class: "bg-gray-900",
      textclass: "bg-white",
      buttonclass: "text-white",
    },
    {
      id: 4,
      text1: "Email",
      text2: "Marketing",
      image: e,
      class: "bg-gray-100",
      textclass: "bg-light-green",
    },
    {
      id: 5,
      text1: "Content",
      text2: "Creation",
      image: c,
      class: "bg-light-green",
      textclass: "bg-white",
    },
    {
      id: 6,
      text1: "Analytics and",
      text2: "Tracking",
      image: f,
      class: "bg-gray-900",
      textclass: "bg-white",
      buttonclass: "text-white",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Services
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
          {CardContent.map((card) => (
            <Card
              key={card.id}
              className={`flex w-full items-center justify-between gap-5 p-12 ${card.class}`}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="text-xl font-medium lg:text-3xl">
                  <p
                    className={`${card.textclass} w-fit rounded-lg px-2 py-0.5`}
                  >
                    {card.text1}
                  </p>
                  <p
                    className={`${card.textclass} w-fit rounded-lg px-2 py-0.5`}
                  >
                    {card.text2}
                  </p>
                </div>
                <Button className="group flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faArrowCircleUp}
                    className={`rotate-45 text-3xl transition-all ease-in group-hover:rotate-90 ${card.buttonclass}`}
                  />
                  <p className={`hidden text-xl lg:block ${card.buttonclass}`}>
                    Learn More
                  </p>
                </Button>
              </div>
              <div>
                <img src={card.image} alt={card.title} className="h-36" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
