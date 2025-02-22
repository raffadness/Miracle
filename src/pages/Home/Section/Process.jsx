import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Card from "../../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ open }) => {
  return !open ? (
    <FontAwesomeIcon icon={faPlus} className="text-2xl lg:text-3xl" />
  ) : (
    <FontAwesomeIcon icon={faMinus} className="text-2xl lg:text-3xl" />
  );
};

const Process = () => {
  const cardContent = [
    {
      id: 1,
      title: "Consultation",
      body: "Our process begins with an in-depth consultation phase, where we take the time to thoroughly understand your business objectives, challenges, and aspirations. Through collaborative discussions, we analyze your current operations, market positioning, and long-term goals. This foundational step ensures that we are fully aligned with your vision and can provide tailored recommendations that address your specific needs. Our team of experts leverages years of industry experience to identify key areas for improvement and growth, setting the stage for a successful partnership.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      body: "Once we have a clear understanding of your requirements, we move into the research and strategy development phase. Here, we conduct comprehensive market analysis, competitor benchmarking, and consumer behavior studies to gather actionable insights. These insights form the backbone of our strategic planning, enabling us to craft customized solutions that align with your business goals. Our data-driven approach ensures that every decision is backed by evidence, minimizing risks and maximizing opportunities. By combining innovative thinking with proven methodologies, we develop robust strategies designed to drive sustainable growth and competitive advantage.",
    },
    {
      id: 3,
      title: "Implementation",
      body: "With a well-defined strategy in place, we proceed to the implementation phase, where our team executes the planned initiatives with precision and efficiency. We prioritize seamless integration into your existing systems and workflows, ensuring minimal disruption to your daily operations. Our experts work closely with your internal teams to facilitate smooth transitions and provide ongoing support throughout the implementation process. By adhering to strict quality standards and timelines, we ensure that all deliverables meet or exceed expectations. This phase marks the transformation of strategic plans into tangible outcomes, laying the groundwork for measurable success.",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      body: "Post-implementation, we enter the critical phase of monitoring and optimization. Our team continuously tracks key performance indicators (KPIs) and evaluates the effectiveness of implemented solutions. Through real-time analytics and periodic reviews, we identify areas for improvement and implement necessary adjustments to enhance performance. This iterative process ensures that your business remains agile and adaptable in an ever-evolving market landscape. By leveraging advanced tools and technologies, we optimize processes to achieve maximum efficiency, cost-effectiveness, and customer satisfaction. Our commitment to excellence drives us to refine and elevate your operations consistently.",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      body: "Transparency and communication are at the heart of our working process. Throughout the engagement, we provide detailed reports and updates to keep you informed about progress, milestones, and outcomes. Our reporting framework is designed to present complex data in a clear and concise manner, enabling you to make informed decisions. Regular meetings and open channels of communication ensure that your feedback is incorporated promptly, fostering a collaborative environment. By maintaining a proactive approach to communication, we build trust and accountability, ensuring that your expectations are not only met but exceeded.",
    },
    {
      id: 6,
      title: "Continual Improvement",
      body: "In today’s fast-paced business environment, stagnation is not an option. That’s why we emphasize a culture of continual improvement, where we constantly evaluate and refine our strategies and processes. By analyzing performance metrics, customer feedback, and emerging trends, we identify opportunities for innovation and enhancement. Our iterative approach ensures that your business stays ahead of the curve, adapting to changing market dynamics while maintaining a focus on long-term sustainability. Through this commitment to excellence, we empower your organization to achieve enduring success and remain a leader in your industry.",
    },
  ];

  const [open, setOpen] = React.useState(0);

  const handleOpen = (id) => {
    setOpen(open === id ? null : id); // Toggle antara membuka dan menutup
  };

  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Our Working Process
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="flex w-full flex-col gap-5 lg:gap-7">
          {cardContent.map((content, index) => (
            <Card
              key={content.id}
              className={`${
                open === content.id ? "bg-light-green" : "bg-gray-100"
              } gap-5 rounded-[50px] p-6 transition-colors duration-300 lg:p-12`}
            >
              <Accordion
                open={open === content.id}
                icon={
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-gray-900 bg-gray-50 lg:h-13 lg:w-13">
                    <Icon open={open === content.id} />
                  </div>
                }
              >
                <AccordionHeader
                  onClick={() => handleOpen(content.id)}
                  className="font-display border-0 p-0"
                >
                  <div className="flex items-center gap-5">
                    <p className="text-4xl lg:text-6xl">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <p className="text-lg lg:text-xl">{content.title}</p>
                  </div>
                </AccordionHeader>
                <AccordionBody className="font-display text-md mt-4 border-t border-solid border-gray-900 pb-0 font-normal text-gray-900 lg:text-lg">
                  {content.body}
                </AccordionBody>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Process;
