"use client";

import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";

const Menu = () => {
  const router = useRouter()

  return (
    <div className="hidden md:flex">
      <MenuItem onClick={() => router.push("/")} label="Home" />
      <MenuItem onClick={() => router.push("/about")} label="About Me" />
      <MenuItem onClick={() => router.push("/projects")} label="Projects" />
      <MenuItem onClick={() => router.push("/experience")} label="Experience" />
      <MenuItem onClick={() => router.push("/contact")} label="Contact Me!" />
    </div>
  );
};

export default Menu;
