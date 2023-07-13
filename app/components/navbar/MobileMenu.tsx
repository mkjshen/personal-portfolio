"use client";

import { useCallback, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <>
      <div
        className="md:hidden cursor-pointer text-gray-500 pr-4 z-10"
        onClick={toggleOpen}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <MobileMenuItem label="Home" route="/" onClick={toggleOpen} />
          <MobileMenuItem label="About Me" route="/about" onClick={toggleOpen} />
          <MobileMenuItem label="Projects" route="/projects" onClick={toggleOpen} />
          <MobileMenuItem label="Experience" route="/experience" onClick={toggleOpen} />
          <MobileMenuItem label="Contact Me!" route="/contact" onClick={toggleOpen} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
