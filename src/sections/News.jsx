import { news } from "/data.js";
import arrow from "../assets/img/arrow.png";

const News = () => {
  return (
    <div className={`w-full bg-gradient-radial-top py-10`}>
      <div className={`max-w-[1200px] w-[90%] mx-auto`}>
        <h2 className={`text-white font-medium text-[32px] mb-10`}>
          News & Events
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5`}>
          {news.map((item) => {
            return (
              <div
                key={item.index}
                className={` mx-auto md:mx-0 bg-white lg:p-8 py-5 px-5 z-1 rounded-lg flex flex-col justify-start gap-5`}
              >
                <p className={`text-[#999] font-light`}>
                  {item.date}, {item.author}
                </p>
                <h3 className={`font-medium leading-tight  text-[18px]`}>
                  {item.title}
                </h3>
                <p className={`text-[#999] font-light leading-relaxed`}>
                  {item.description}
                </p>
                <div className={`mt-auto`}>
                  <a href="#" className={`max-w-max  font-light`}>
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default News;
