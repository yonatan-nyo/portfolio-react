// import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = (bool: boolean) => {
    setNav(bool);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={
        shadow
          ? "fixed w-screen h-[63px] md:h-[84px] bg-none top-0 left-0 z-[100] bg-[#f4f6f5] shadow-xl ease-in-out duration-300"
          : "fixed w-screen h-[63px] md:h-[84px] bg-none top-0 left-0 z-[100] bg-[#f4f6f5]"
      }>
      <div className="max-w-[1640px] mx-auto h-full flex items-center justify-between pl-4 pr-6">
        <img src="/SkimpJr.ico" className="w-[58px] h-[58px] md:w-[76px] md:h-[76px]" alt="" />
        <nav className="gap-2 hidden md:flex">
          <HashLink to="/#home" className="hash-link">
            HOME
          </HashLink>
          <HashLink to="/#about" className="hash-link">
            ABOUT
          </HashLink>
          <HashLink to="/#skills" className="hash-link">
            SKILLS
          </HashLink>
          <HashLink to="#" className="hash-link">
            PROJECTS
          </HashLink>
          <HashLink to="/resume" className="hash-link">
            RESUME
          </HashLink>
        </nav>
        <div className="block md:hidden cursor-pointer" onClick={() => handleNav(true)}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div onClick={() => handleNav(false)} className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[240px] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-150%] h-screen bg-[#ecf0f3] top-0 p-10 ease-in duration-500"
          }></div>
      </div>
    </header>
  );
};

export default Navbar;
