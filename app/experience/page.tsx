"use client";

import { useRouter } from "next/navigation";
import ClientOnly from "../components/ClientOnly";
import Button from "../components/Button";
import TechnologyCard from "../components/experience/TechnologyCard";
import { AiOutlineHome } from "react-icons/ai";

const ExperiencePage = () => {
  const router = useRouter();

  const technologies = [
    {
      id: 1,
      src: "images/experience/html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "images/experience/css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "images/experience/javascript.png",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "images/experience/react.png",
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "images/experience/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "images/experience/nextjs.png",
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: "images/experience/github.png",
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: "images/experience/node.png",
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: "images/experience/mongodb.svg",
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: "images/experience/python.svg",
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 11,
      src: "images/experience/bash.svg",
      title: "Bash",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: "images/experience/typescript.svg",
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 13,
      src: "images/experience/vscode.svg",
      title: "Visual Studio Code",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: "images/experience/c.svg",
      title: "C",
      style: "shadow-blue-400",
    },
  ];

  return (
    <ClientOnly>
      <div className="max-w-screen-xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-10 text-blue-400 flex flex-col">
        <div className="justify-center pt-20 md:px-0 px-10 pb-4">
          <h2 className="text-5xl md:text-7xl text-white">Experience</h2>
          <div className="flex justify-between items-center">
            <p className="py-8 text-xl">
              These are some of the various technologies I've worked with!
            </p>
            <div className="hidden md:block">
              <Button
                label="Home"
                onClick={() => router.push("/")}
                icon={AiOutlineHome}
                size={30}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 md:px-12 text-center">
          {technologies.map(({ id, src, title, style }) => (
            <TechnologyCard key={id} src={src} label={title} style={style} />
          ))}
        </div>
        <div className="justify-center pt-6 md:px-0 px-10 md:hidden">
          <Button
            label="Home"
            onClick={() => router.push("/")}
            icon={AiOutlineHome}
            size={30}
          />
        </div>
      </div>
    </ClientOnly>
  );
};

export default ExperiencePage;
