import { audience } from "../../data.js";
import AudienceCard from "../components/AudienceCard.jsx";
import space from "../assets/img/bg_space_on_premises_2023_v2.svg";
import spaceLogo from "../assets/img/space-logo.png";
import jbAcademy from "../assets/img/jetbrainacademy.svg";
import topStories from "../assets/img/annual-highlights-2023.png";
import { language } from "../../data.js";

const Header = () => {
  return (
    <div className={`bg-[#27282C]`}>
      <main className={`max-w-[1200px] w-[95%] mx-auto py-10`}>
        <h1
          className={`font-medium text-white text-[40px] max-w-[800px] leading-tight`}
        >
          We build our software so you can enjoy building yours
        </h1>
        <p className={`text-white text-[16px] md:text-[18px] my-3`}>
          Essential tools for software developers and teams
        </p>
        <div
          className={`flex flex-wrap justify-start align-center gap-10 items-start mt-10`}
        >
          {audience.map((item) => (
            <AudienceCard
              key={item.index}
              src={item.src}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
        {/*    Grid   */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 py-10 gap-5`}
        >
          <div
            className={`grid col-span-1 md:col-span-2 md:row-span-2 p-5 md:p-7 bg-gradient-radial-blue rounded-xl cursor-pointer`}
          >
            {/*    Left     */}
            <div className="flex row-start-1 col-start-1 col-span-2 flex-col self-start z-[100] gap-5 lg:row-span-full">
              <img src={spaceLogo} alt="" className={`w-[68px] md:w-[80px]`} />
              <h2 className={`text-white font-medium text-[34px]`}>
                Space On-Premises <br /> 2023.2 is here
              </h2>
              <p
                className={`text-white font-normal md:font-medium text-[18px]`}
              >
                with new simplified installation options <br /> and useful
                features
              </p>
            </div>
            <button
              className={`md:px-10 md:py-4 px-6 py-2 bg-white self-baseline rounded-full max-w-max text-[16px] md:text-[18px] lg:text-[18px] hover:bg-[#CDCDCD]`}
            >
              Explore
            </button>
            {/*  right  */}
            <img
              src={space}
              alt=""
              className={`object-fit row-start-2 md:row-span-full col-start-2 col-span-1 self-baseline justify-self-end w-[250px] lg:w-[400px] md:w-[300px] lg:row-span-full`}
            />
          </div>
          <div
            className={`grid col-span-1 row-span-1 p-5 gap-3 bg-[#5233CC] rounded-xl`}
          >
            {/*  flex container  */}
            <div
              className={`flex flex-col-reverse lg:flex-row  md:justify-between gap-3 lg:gap-0`}
            >
              {/* left */}
              <div className={`flex flex-col gap-2`}>
                <h2 className={`text-white font-medium text-[22px]`}>
                  JetBrain Academy
                </h2>
                <p className={`text-white font-normal text-[16px]`}>
                  A place for learning and teaching computer science your way
                </p>
              </div>
              {/*  right  */}
              <img src={jbAcademy} alt="" className={`w-[32px] self-start`} />
            </div>
            <button
              className={`text-white self-end  border border-[#9D8CE2] rounded-full  max-w-max px-7 py-2 text-[14px]  hover:bg-[#CDCDCD] hover:text-black`}
            >
              Learn more
            </button>
          </div>
          <div
            className={`grid col-span-1 row-span-1   p-5 gap-3 bg-gradient-purple rounded-xl`}
          >
            <div className={`flex flex-col gap-3 md:col-span-2`}>
              <h2 className={`text-white font-medium text-[22px]`}>
                JetBrains Annual Highlights 2023
              </h2>
              <p className={`text-white font-normal text-[16px]`}>
                The year’s top stories in one convenient place
              </p>
            </div>
            <img
              src={topStories}
              alt=""
              className={`w-[96px] col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end self-end`}
            />
            <button
              className={`row-start-2 text-white self-end  border border-[#9D8CE2] rounded-full  max-w-max px-7 py-2 text-[14px]  hover:bg-[#CDCDCD] hover:text-black`}
            >
              Check It Out
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-10 max-w-[850px]`}>
          <h2
            className={`text-white lg:text-[26px] md:text-[24px] text-[20px]`}
          >
            However big or small your team is, our products will ensure that it
            always has a smooth and enjoyable experience when building your
            code, planning your work, collaborating
          </h2>
          <h2
            className={`text-white lg:text-[26px] md:text-[24px] text-[20px]`}
          >
            Whatever platform or language you work with, JetBrains has a
            development tool for you.
          </h2>
          <div className={`flex gap-3 flex-wrap max-w-[600px] cursor-pointer`}>
            {language.map((item) => {
              return (
                <p
                  className={`px-4 py-2 bg-white rounded-full max-w-max text-[16px] md:text-[20px]`}
                  key={item.index}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Header;
