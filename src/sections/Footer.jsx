import { footerLinks } from "../../data.js";

const Footer = () => {
  return (
    <div className={`w-full bg-[#27282C] pt-10 pb-20`}>
      <div
        id="footer-container"
        className={`max-w-[1200px] w-[90%] mx-auto grid md:grid-cols-3 lg:grid-cols-6 justify-center grid-cols-2 gap-10`}
      >
        {footerLinks.map((item) => {
          return (
            <div key={item.index}>
              <div className={`flex flex-col mb-3`}>
                <h4 className={`text-[14px] text-white font-medium`}>
                  {item.title}
                </h4>
              </div>
              <div className={`flex flex-col gap-4`}>
                {item.links.map((item) => (
                  <span
                    className={`text-[12px] text-[#A6B2A7] cursor-pointer hover:text-white`}
                    key={item.index}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <hr className={`border-[#A6B2A7] mt-10 max-w-[1200px] w-[90%] mx-auto`} />
    </div>
  );
};
export default Footer;
