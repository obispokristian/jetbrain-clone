import { discover } from "../../data.js";

const Discover = () => {
  return (
    <div className={`w-full bg-gradient-radial-bottom py-10`}>
      <div className={`flex flex-col max-w-[1200px] w-[90%] mx-auto`}>
        <h2 className={`text-white font-medium text-[24px] mb-10`}>
          Discover More
        </h2>
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-[1200px] mx-auto`}
        >
          {discover.map((item) => {
            return (
              <div
                className={`bg-[#303033] rounded-lg py-8 px-5 gap-5 flex flex-col items-start`}
                key={item.index}
              >
                <img className={`=`} src={item.src} alt="" />
                <h4 className={`text-white font-medium`}>{item.title}</h4>
                <p className={`text-[#B2B2B3] text-[14px]`}>
                  {item.description}
                </p>
                <div
                  className={`flex items-center cursor-pointer gap-1 hover:gap-2 transition-all mt-auto`}
                >
                  <a className={`text-white text-[14px]`} href="#">
                    Watch Now
                  </a>
                  <img
                    className={`w-[15px]`}
                    src="../../src/assets/img/arrow.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Discover;
