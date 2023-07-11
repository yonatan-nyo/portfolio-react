// import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

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
          ? "fixed w-screen h-[84px] bg-none top-0 left-0 z-[100] bg-[#f4f6f5] shadow-xl ease-in-out duration-300"
          : "fixed w-screen h-[84px] bg-none top-0 left-0 z-[100] bg-[#f4f6f5]"
      }>
      <div className="max-w-[1640px] mx-auto h-full flex items-center justify-between px-2 sm:px-4">
        <img src="/SkimpJr.ico" className="w-[76px] h-[76px]" alt="" />
        <nav className="flex gap-2 ">
          <HashLink to="#">a</HashLink>
          <HashLink to="#">b</HashLink>
          <HashLink to="#">c</HashLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
