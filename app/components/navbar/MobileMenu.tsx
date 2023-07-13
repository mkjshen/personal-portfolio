"use client";

import { useCallback, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsFillPersonFill, BsHammer } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
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
        className="lg:hidden cursor-pointer text-gray-500 pr-4 z-10 hover:scale-105"
        onClick={toggleOpen}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-blue-400">
          <MobileMenuItem
            label="Home"
            route="/"
            onClick={toggleOpen}
            icon={AiOutlineHome}
          />
          <MobileMenuItem
            label="About Me"
            route="/about"
            onClick={toggleOpen}
            icon={BsFillPersonFill}
          />
          <MobileMenuItem
            label="Projects"
            route="/projects"
            onClick={toggleOpen}
            icon={BsHammer}
            className="group-hover:-rotate-90 duration-300"
          />
          <MobileMenuItem
            label="Experience"
            route="/experience"
            onClick={toggleOpen}
            icon={BsCodeSlash}
          />
          <MobileMenuItem
            label="Contact Me!"
            route="/contact"
            onClick={toggleOpen}
            icon={BiSolidContact}
          />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
