import React from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Case = () => {
  const cardContent = [
    {
      id: 1,
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      class: "pr-6",
    },
    {
      id: 2,
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords  and a 200% increase in organic traffic.",
      class: "pr-6",
    },
    {
      id: 3,
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      class: "",
    },
  ];

  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth >= 1024,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Case Studies
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        {/* Mobile Layout */}
        {isLargeScreen ? (
          <Card className="grid grid-cols-3 gap-6 divide-x divide-solid divide-gray-50 bg-gray-900 p-12">
            {cardContent.map((content) => (
              <div
                key={content.id}
                className={`flex w-full flex-col justify-between gap-7 ${content.class}`}
              >
                <div className="text-gray-50">{content.text}</div>
                <Button className="text-light-green group flex items-center gap-3">
                  <p>Learn more</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="-rotate-45 transition group-hover:rotate-0"
                  />
                </Button>
              </div>
            ))}
          </Card>
        ) : (
          // Parent container with horizontal scroll
          <div className="flex w-full overflow-x-scroll">
            <div className="flex gap-5">
              {cardContent.map((content) => (
                <Card
                  key={content.id}
                  className="flex min-w-[400px] flex-col items-start justify-between gap-8 border-0 bg-gray-900 p-12 shadow-none"
                >
                  <div className="text-lg/8 text-gray-50">{content.text}</div>
                  <Button className="text-light-green group flex items-center gap-3">
                    <p>Learn more</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="-rotate-45 transition group-hover:rotate-0"
                    />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Case;
