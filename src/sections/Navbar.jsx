import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.svg";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`bg-[#27282C]`}>
      <nav
        className={`flex items-center justify-between py-3 max-w-[1200px] mx-auto w-[95%] relative `}
      >
        <div id="logo" className={`flex-1`}>
          <img src={Logo} alt="" className={`w-[70px]`} />
        </div>
        <ul id="links" className={`hidden lg:flex gap-5 mr-5 cursor-pointer`}>
          <li className={`navLink text-[18px]`}>Developer Tools</li>
          <li className={`navLink text-[18px]`}>Team Tools</li>
          <li className={`navLink text-[18px]`}>Education</li>
          <li className={`navLink text-[18px]`}>Solutions</li>
          <li className={`navLink text-[18px]`}>Support</li>
          <li className={`navLink text-[18px]`}>Store</li>
        </ul>
        <ul id="misc" className={`flex gap-5 cursor-pointer md:mr-5 mr-3`}>
          <li className={`navLink`}>
            <AiOutlineSearch size={24} />
          </li>
          <li className={`hidden md:block navLink`}>
            <BsFillPersonFill size={24} />
          </li>
          <li className={`hidden md:block navLink`}>
            <HiShoppingCart size={24} />
          </li>
          <li className={`hidden md:block navLink`}>
            <MdLanguage size={24} />
          </li>
        </ul>
        {toggle ? (
          <AiOutlineClose
            className={`text-[#CDCDCD] cursor-pointer navLink`}
            size={28}
            onClick={() => setToggle(false)}
          />
        ) : (
          <BiMenuAltRight
            className={`text-[#CDCDCD] cursor-pointer lg:hidden navLink`}
            size={28}
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <ul
            id="links"
            className={`flex flex-col absolute top-[80px] right-0 z-[100] gap-3 cursor-pointer  bg-[#27282C] py-4 px-8 rounded-lg scale-up-center`}
          >
            <li className={`navLink`}>Developer Tools</li>
            <li className={`navLink`}>Team Tools</li>
            <li className={`navLink`}>Education</li>
            <li className={`navLink`}>Solutions</li>
            <li className={`navLink`}>Support</li>
            <li className={`navLink`}>Store</li>
            <li className={`navLink`}>Login</li>
          </ul>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
