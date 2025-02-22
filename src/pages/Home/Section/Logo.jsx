import Dribbble from "../../../assets/Home/Company logo-1.svg";
import Hubspot from "../../../assets/Home/Company logo-2.svg";
import Notion from "../../../assets/Home/Company logo-3.svg";
import Netflix from "../../../assets/Home/Company logo-4.svg";
import Zoom from "../../../assets/Home/Company logo-5.svg";
import Amazon from "../../../assets/Home/Company logo.svg";

const Logo = () => {
  return (
    <>
      <div className="grid w-full grid-cols-3 justify-center gap-5 py-14 grayscale md:grid-cols-6">
        <img
          src={Amazon}
          alt="Amazon Logo"
          className="w-32 self-center justify-self-start md:w-40"
        />
        <img
          src={Dribbble}
          alt="Dribbble Logo"
          className="w-32 self-center justify-self-center md:w-40"
        />
        <img
          src={Hubspot}
          alt="Hubspot Logo"
          className="w-32 self-center justify-self-end md:w-40 lg:justify-self-center"
        />
        <img
          src={Notion}
          alt="Notion Logo"
          className="w-32 self-center justify-self-start md:w-40 lg:justify-self-center"
        />
        <img
          src={Netflix}
          alt="Netflix Logo"
          className="w-32 self-center justify-self-center md:w-40"
        />
        <img
          src={Zoom}
          alt="Zoom Logo"
          className="w-32 self-center justify-self-end md:w-40"
        />
      </div>
    </>
  );
};

export default Logo;
