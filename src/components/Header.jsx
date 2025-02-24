import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/Logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex w-full items-center justify-between px-5 py-5 md:px-8 md:py-7 lg:px-24 lg:py-10 xl:px-40">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Miracle Logo" className="w-5 md:w-7" />
          <p className="text-lg font-medium md:text-3xl">Miracle</p>
        </Link>
        <button className="block text-xl md:text-3xl lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="lg:text-md absolute top-0 right-0 hidden h-screen w-3/4 flex-col items-center gap-3 bg-gray-200 p-3 text-xl lg:relative lg:flex lg:h-fit lg:w-fit lg:flex-row lg:gap-7 lg:bg-transparent lg:p-0 xl:gap-10">
          <Link to="/" className="w-full px-3 py-2 lg:hidden lg:w-fit lg:p-0">
            Home
          </Link>
          <Link to="#" className="w-full px-3 py-2 lg:w-fit lg:p-0">
            About
          </Link>
          <Link to="#" className="w-full px-3 py-2 lg:w-fit lg:p-0">
            Services
          </Link>
          <Link to="#" className="w-full px-3 py-2 lg:w-fit lg:p-0">
            Use Cases
          </Link>
          <Link to="#" className="w-full px-3 py-2 lg:w-fit lg:p-0">
            Pricing
          </Link>
          <Link to="#" className="w-full px-3 py-2 lg:w-fit lg:p-0">
            Blog
          </Link>
          <Button className="w-full rounded-lg border border-solid border-gray-900 bg-white py-3 text-center hover:bg-gray-900 hover:text-gray-50 lg:w-fit lg:rounded-xl lg:px-6 xl:px-9 xl:py-4">
            Request a quote
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
