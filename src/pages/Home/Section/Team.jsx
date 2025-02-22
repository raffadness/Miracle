import Card from "../../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import team1 from "../../../assets/Home/1.jpeg";
import team3 from "../../../assets/Home/2.jpeg";
import team4 from "../../../assets/Home/3.jpeg";
import team6 from "../../../assets/Home/4.jpeg";
import team5 from "../../../assets/Home/5.jpeg";
import team2 from "../../../assets/Home/6.jpeg";
import Button from "../../../components/Button";

const Team = () => {
  const teamGroup = [
    {
      id: 1,
      image: team1,
      name: "Alexander Elo",
      position: "CEO and Founder",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "Visionary leader with a passion for innovation and strategic growth. Rafif has successfully guided the company to new heights through his expertise in business development and leadership.",
    },
    {
      id: 2,
      image: team2,
      name: "Sarah Adelia",
      position: "Chief Operating Officer",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "A results-driven COO with extensive experience in operations management and process optimization. Sarah ensures seamless execution of strategies and operational excellence across all departments.",
    },
    {
      id: 3,
      image: team3,
      name: "Michael Johnson",
      position: "Chief Technology Officer",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "An innovative CTO with a strong background in software engineering and technology strategy. Michael leads the development of cutting-edge solutions that drive business success.",
    },
    {
      id: 4,
      image: team4,
      name: "Emily Chen",
      position: "Head of Marketing",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "A creative marketing strategist with a proven track record of building strong brands. Emily crafts compelling campaigns that engage audiences and deliver measurable results.",
    },
    {
      id: 5,
      image: team5,
      name: "Daniel Martinez",
      position: "Lead Data Scientist",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "A data-driven professional specializing in machine learning and analytics. Daniel transforms complex data into actionable insights that fuel business growth and innovation.",
    },
    {
      id: 6,
      image: team6,
      name: "Sophia Williams",
      position: "Human Resources Manager",
      linkedin: "https://www.linkedin.com/in/rafifahnafyusi/",
      desc: "A dedicated HR professional focused on fostering a positive workplace culture. Sophia ensures talent acquisition, employee engagement, and organizational development are prioritized.",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Team
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {teamGroup.map((team) => (
            <Card key={team.id} className="flex flex-col gap-6 p-5 xl:p-8">
              <div className="relative flex w-full gap-4">
                <div className="bg-light-green relative h-24 w-24 overflow-hidden rounded-full shadow-[5px_5px_0]">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="absolute top-6 right-0 left-0 mx-auto h-24 w-24 scale-150 mix-blend-darken"
                  />
                </div>
                <div className="self-end">
                  <p className="text-lg font-medium">{team.name}</p>
                  <p>{team.position}</p>
                </div>
                <a
                  href={team.linkedin}
                  className="absolute top-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-light-green text-xl"
                  />
                </a>
              </div>
              <div className="h-[1px] w-full bg-gray-900"></div>
              <div>{team.desc}</div>
            </Card>
          ))}
          <div className="col-span-full flex justify-end">
            <Button className="rounded-xl bg-gray-900 px-14 py-4 text-xl text-gray-50">
              See all team
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
