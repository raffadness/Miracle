import Card from "../../../components/Card";
import Bubble from "../../../assets/Home/Bubble.svg";
import PagOn from "../../../assets/Home/Pag1.svg";
import PagOff from "../../../assets/Home/Pag2.svg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testi = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum corporis qui? Ipsa autem et minima laborum voluptatibus accusamus quam.",
      name: "John Doe",
      position: "Marketing at AZ Corp",
    },
    {
      id: 2,
      quote:
        "Consectetur adipisicing elit. Voluptatem, quae! Quisquam, voluptatum. Nemo, quas. Quisquam, voluptatum. Nemo, quas.",
      name: "Jane Smith",
      position: "Product Manager at Tech Solutions",
    },
    {
      id: 3,
      quote:
        "Adipisicing elit. Voluptatem, quae! Quisquam, voluptatum. Nemo, quas. Quisquam, voluptatum. Nemo, quas.",
      name: "Michael Brown",
      position: "CEO at Innovatech",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Testimonials
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <Card className="flex w-full flex-col overflow-hidden bg-gray-900 p-12 shadow-none">
          <div></div>
          <div className="flex items-center justify-center gap-10">
            <button>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl text-white"
              />
            </button>
            <div className="flex items-center justify-center gap-3">
              <button>
                <img src={PagOn} alt="Pagination" className="w-7" />
              </button>
              <button>
                <img src={PagOff} alt="Pagination" className="w-7" />
              </button>
              <button>
                <img src={PagOff} alt="Pagination" className="w-7" />
              </button>
            </div>
            <button>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl text-white"
              />
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Testi;
