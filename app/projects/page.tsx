"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import ClientOnly from "../components/ClientOnly";
import ProjectCard from "../components/portfolio/ProjectCard";
import { MdOutlineNavigateNext } from "react-icons/md";

const projects = [
  {
    id: 1,
    src: "/images/portfolio/travel-app.jpg",
    name: "Travel App",
    href: "https://github.com/mkjshen/travel-app",
  },
  {
    id: 2,
    src: "/images/portfolio/github.jpg",
    name: "Personal Website",
    href: "",
  },
  {
    id: 3,
    src: "/images/portfolio/github.jpg",
    name: "Weather App",
    href: "https://github.com/mkjshen/weather-app",
  },
  {
    id: 4,
    src: "/images/portfolio/github.jpg",
    name: "Calculator",
    href: "https://github.com/mkjshen/Calculator",
  },
  {
    id: 5,
    src: "/images/portfolio/github.jpg",
    name: "Portfolio Robo-Advisor",
    href: "https://github.com/mkjshen/portfolio-manager",
  },
];

const ProjectsPage = () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <div className="max-w-screen-xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-10 text-blue-400 flex flex-col">
        <div className="justify-center pt-20 md:px-0 px-10 pb-4">
          <h1 className="text-5xl md:text-7xl text-white">Projects</h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="py-8 text-xl">
              Feel free to check out some of my projects!
            </p>
            <div className="hidden md:block">
              <Button
                label="Experience"
                onClick={() => router.push("/experience")}
                icon={MdOutlineNavigateNext}
                size={30}
                className="group-hover:translate-x-3 duration-300"
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {projects.map(({ id, src, name, href }) => (
            <ProjectCard key={id} src={src} label={name} href={href} />
          ))}
        </div>
        <div className="justify-center pt-6 md:px-0 px-10 md:hidden">
          <Button
            label="Experience"
            onClick={() => router.push("/experience")}
            icon={MdOutlineNavigateNext}
            size={30}
            className="group-hover:translate-x-3 duration-300"
          />
        </div>
      </div>
    </ClientOnly>
  );
};

export default ProjectsPage;
