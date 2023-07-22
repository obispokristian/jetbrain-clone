import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "/src/assets/img/Mary-Grygleski@2x.png";
import img2 from "/src/assets/img/Frans-Bouma@2x.png";
import img3 from "/src/assets/img/Marvin-Burman@2x.png";
import { brands } from "../../data.js";

const Trusted = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={`w-full bg-white py-10`}>
      <div className="max-w-[1200px] w-[90%] mx-auto md:flex justify-between items-center">
        {/*  top    */}
        <div className={`max-w-[600px]`}>
          <h2 className={`font-medium text-[32px] mb-5`}>Trusted</h2>
          <p className={`md:text-[24px] text-[16px] font-light`}>
            Many of the world's most dynamic companies and individuals find
            JetBrains tools make them more creative and effective.
          </p>
        </div>
        {/*  bottom  */}
        <div className={`flex flex-wrap gap-5`}>
          {/*  left*/}
          <div className={`flex flex-col leading-tight max-w-max`}>
            <h2 className={`text-[56px] font-light`}>15.9M</h2>
            <p className={`text-[16px]`}>users trust our tool</p>
          </div>
          {/*    right  */}
          <div className={`flex flex-col leading-tight max-w-max`}>
            <h2 className={`text-[56px] font-light`}>3.6K</h2>
            <p>join every day</p>
          </div>
        </div>
      </div>
      <div
        className={`embla max-w-[1200px] mx-auto py-5 cursor-grab`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {/*1*/}
          <div
            className={`embla__slide bg-[#6B57FF] w-full max-w-[1200px] mx-auto grid md:grid-cols-3 lg:rounded-xl md:overflow-hidden`}
          >
            <img className={`md:h-full object-cover`} src={img1} alt="" />
            {/*text*/}
            <div
              className={`flex flex-col justify-center items-start md:col-span-2 p-10 text-[#D2CCFF]`}
            >
              <h2 className={`text-[20px] lg:text-[32px]`}>
                IntelliJ IDEA is undoubtedly the top-choice IDE for software
                developers.
              </h2>
              <p className={`text-white text-[16px] md:text-[20px] my-5`}>
                Mary Grygleski
              </p>
              <p className={`font-light`}>IBM</p>
            </div>
          </div>
          {/* 2 */}
          <div
            className={`embla__slide bg-[#6B57FF] w-full max-w-[1200px] mx-auto grid md:grid-cols-3 lg:rounded-xl md:overflow-hidden`}
          >
            <img className={`md:h-full object-cover`} src={img2} alt="" />
            {/*text*/}
            <div
              className={`flex flex-col justify-center items-start  md:col-span-2 p-10 text-[#D2CCFF]`}
            >
              <h2 className={` text-[20px] lg:text-[32px]`}>
                In Rider, I just focus on working with my code, as it should be,
                instead of fighting my IDE. Rider gave me back the joy in
                writing .NET code.
              </h2>
              <p className={`text-white text-[16px] md:text-[20px] my-5`}>
                Frans Bouma
              </p>
              <p>LLBLGen Pro</p>
            </div>
          </div>
          {/*  3*/}
          <div
            className={`embla__slide bg-[#6B57FF] w-full max-w-[1200px] mx-auto grid md:grid-cols-3 lg:rounded-xl md:overflow-hidden`}
          >
            <img className={`md:h-full object-cover`} src={img3} alt="" />
            {/*text*/}
            <div
              className={`flex flex-col justify-center items-start md:col-span-2 p-10 text-[#D2CCFF]`}
            >
              <h2 className={`text-[20px] lg:text-[32px]`}>
                YouTrack is a very stable and consistent product. We value its
                rich functionality, speed and efficiency
              </h2>
              <p className={`text-white text-[16px] md:text-[20px] my-5`}>
                Marvin Burman
              </p>
              <p>testhub.com</p>
            </div>
          </div>
        </div>
      </div>
      {/*  brands */}
      <div className={`max-w-[1200px] w-[90%] mx-auto my-10`}>
        <h2 className={`font-light text-[24px]  max-w-[600px]`}>
          Our tools are used all over the world in some of the best-known
          companies.
        </h2>
        <div
          className={`grid grid-cols-2 items-center md:grid-cols-6 gap-10 md:gap-0 mt-5 mx-auto max-w-[1200px]`}
          id="brand-container"
        >
          {brands.map((img) => {
            return (
              <div className={`justify-self-center`} key={img.index}>
                <img className={`w-[100px]`} src={img} alt="brands" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Trusted;
