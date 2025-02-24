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
        <Card className="flex w-full flex-col gap-10 overflow-hidden bg-gray-900 p-12 shadow-none xl:gap-20">
          <div className="flex w-full flex-row gap-15 overflow-auto">
            <div className="flex w-full flex-col">
              <div className="relative w-[450px] text-white lg:w-[500px] xl:w-[700px]">
                <img
                  src={Bubble}
                  alt="Bubble Testimonials"
                  className="w-full"
                />
                <p className="absolute top-0 p-6 text-sm lg:p-7 xl:p-11 xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quia quidem eum in officia quos laudantium ipsum esse
                  distinctio quae.
                </p>
              </div>
              <div className="flex flex-col self-start pl-16 text-white">
                <p className="text-light-green text-xl font-semibold">Jon Do</p>
                <p>CEO at Company AZY</p>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative w-[450px] text-white lg:w-[500px] xl:w-[700px]">
                <img
                  src={Bubble}
                  alt="Bubble Testimonials"
                  className="w-full"
                />
                <p className="absolute top-0 p-6 text-sm lg:p-7 xl:p-11 xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quia quidem eum in officia quos laudantium ipsum esse
                  distinctio quae.
                </p>
              </div>
              <div className="flex flex-col self-start pl-16 text-white">
                <p className="text-light-green text-xl font-semibold">Jon Do</p>
                <p>CEO at Company AZY</p>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative w-[450px] text-white lg:w-[500px] xl:w-[700px]">
                <img
                  src={Bubble}
                  alt="Bubble Testimonials"
                  className="w-full"
                />
                <p className="absolute top-0 p-6 text-sm lg:p-7 xl:p-11 xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quia quidem eum in officia quos laudantium ipsum esse
                  distinctio quae.
                </p>
              </div>
              <div className="flex flex-col self-start pl-16 text-white">
                <p className="text-light-green text-xl font-semibold">Jon Do</p>
                <p>CEO at Company AZY</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <button>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-lg text-white/50 lg:text-2xl"
              />
            </button>
            <div className="flex items-center justify-center gap-3">
              <button>
                <img src={PagOn} alt="Pagination" className="w-5 lg:w-7" />
              </button>
              <button>
                <img src={PagOff} alt="Pagination" className="w-5 lg:w-7" />
              </button>
              <button>
                <img src={PagOff} alt="Pagination" className="w-5 lg:w-7" />
              </button>
            </div>
            <button>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-lg text-white lg:text-2xl"
              />
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Testi;
