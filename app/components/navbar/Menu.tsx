"use client";

import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsFillPersonFill, BsHammer } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";

import MenuItem from "./MenuItem";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="hidden lg:flex">
      <MenuItem
        onClick={() => router.push("/")}
        label="Home"
        icon={AiOutlineHome}
      />
      <MenuItem
        onClick={() => router.push("/about")}
        label="About Me"
        icon={BsFillPersonFill}
      />
      <MenuItem
        onClick={() => router.push("/projects")}
        label="Projects"
        icon={BsHammer}
        className="group-hover:-rotate-90 duration-300"
      />
      <MenuItem
        onClick={() => router.push("/experience")}
        label="Experience"
        icon={BsCodeSlash}
      />
    </div>
  );
};

export default Menu;
