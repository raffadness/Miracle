import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../assets/Home/Pag2.svg";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-10 bg-gray-900 px-5 pt-14 text-white lg:mx-24 lg:w-auto lg:rounded-t-4xl lg:px-15 xl:mx-40">
        <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
          <div className="flex w-full justify-center gap-4 lg:justify-normal">
            <img src={footerImage} alt="footer Image" className="w-8" />
            <p className="text-4xl">Miracle</p>
          </div>
          <div className="flex flex-col items-center text-xl lg:w-full lg:flex-row lg:justify-center lg:gap-5">
            <Link to="#" className="py-3 text-center lg:w-[100px] lg:py-0">
              About
            </Link>
            <Link to="#" className="py-3 text-center lg:w-[100px] lg:py-0">
              Services
            </Link>
            <Link to="#" className="py-3 text-center lg:w-[100px] lg:py-0">
              Use Cases
            </Link>
            <Link to="#" className="py-3 text-center lg:w-[100px] lg:py-0">
              Pricing
            </Link>
          </div>
          <div className="hidden w-full justify-end gap-4 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex w-full flex-col items-center gap-10 lg:items-start">
            <p className="bg-light-green w-fit rounded-md px-1.5 text-lg font-semibold text-gray-900 lg:text-2xl">
              Contact us:
            </p>
            <div className="flex w-full flex-col gap-5 px-18 text-center lg:gap-8 lg:px-0 lg:text-start lg:text-xl">
              <p>Email: info@miracle.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <Card className="w-full rounded-xl bg-gray-800 p-8 ring-0 shadow-none">
            <form
              action="POST"
              className="flex h-full flex-col gap-4 lg:flex-row lg:items-center"
            >
              <input
                type="text"
                placeholder="e.g. name@gmail.com"
                className="rounded-lg border border-gray-400 px-6 py-4 placeholder:text-white/60 lg:w-full"
              />
              <Button className="bg-light-green rounded-lg px-6 py-4 text-lg font-medium text-gray-900 lg:w-full">
                Subscribe to news
              </Button>
            </form>
          </Card>
        </div>
        <div className="flex w-full flex-col gap-10">
          <div className="flex items-center justify-center gap-4 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="flex flex-col items-center gap-6 pb-10 text-lg lg:flex-row lg:gap-16 lg:text-xl">
            <p>© 2025 Miracle. All Rights Reserved.</p>
            <p className="underline">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
