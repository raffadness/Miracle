import Card from "../../../components/Card";
import contactImage from "../../../assets/Home/contact.svg";
import Button from "../../../components/Button";

const Contact = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-20 py-14">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-normal">
          <p className="bg-light-green rounded-lg px-2 py-0.5 text-4xl font-medium">
            Contact
          </p>
          <p className="text-center lg:w-1/3 lg:text-start">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <Card className="relative flex w-full overflow-hidden bg-gray-100 p-12 ring-0 shadow-none">
          <div className="w-full">
            <form
              action="POST"
              className="flex w-full flex-col justify-normal gap-10 lg:w-1/2"
            >
              <div className="flex w-full items-center justify-evenly lg:justify-normal lg:gap-10">
                <div className="inline-flex gap-2">
                  <label
                    className="relative flex cursor-pointer items-center"
                    for="email"
                  >
                    <input
                      name="framework"
                      type="radio"
                      className="peer h-7 w-7 cursor-pointer appearance-none rounded-full border border-gray-500 bg-white transition-all checked:border-slate-400"
                      id="email"
                    />
                    <span className="bg-light-green absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
                  </label>
                  <label for="email">Say Hi</label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    className="relative flex cursor-pointer items-center"
                    for="quote"
                  >
                    <input
                      name="framework"
                      type="radio"
                      className="peer h-7 w-7 cursor-pointer appearance-none rounded-full border border-gray-500 bg-white transition-all checked:border-slate-400"
                    />
                    <span className="bg-light-green absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
                  </label>
                  <label for="quote">Get a Quote</label>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3">
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alexander"
                    className="rounded-xl border border-gray-900 bg-white p-4"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="e.g. name@email.com"
                    className="rounded-xl border border-gray-900 bg-white p-4"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your Message Here"
                    className="h-28 rounded-xl border border-gray-900 bg-white p-4 lg:h-48"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Button
                    id="message"
                    placeholder="Your Message Here"
                    className="mt-7 rounded-xl bg-gray-900 p-4 text-white"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="absolute top-0 -right-72 hidden h-full items-center lg:flex">
            <img
              src={contactImage}
              alt="contactImage"
              className="h-full scale-[85%]"
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Contact;
