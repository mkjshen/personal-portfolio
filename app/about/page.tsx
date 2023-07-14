"use client";

import Image from "next/image";
import ClientOnly from "../components/ClientOnly";
import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <div className="text-blue-400 h-full max-w-[2520px] mx-auto py-8 md:py-24 md:h-screen lg:py-28">
        <div className="max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 px-10">
          <div className="flex flex-col my-auto md:w-1/2 w-full text-blue-400 md:mx-6">
            <h2 className="font-black text-5xl md:text-7xl pb-4 text-white">
              About
            </h2>
            <p className="py-4 text-blue-300">
              Hi guys, thanks for visiting my website! My name is Mitchel Shen
              and I am a 20 year old student at the University of Waterloo. I
              was born in Singapore but I've lived in various countries, such as
              China and the UK, throughout my life.
            </p>
            <br />

            <p className="py-4">
              One of my favourite pastimes is to watch and play football with my
              friends. Ever since I was young, I've supported Manchester United
              and I will continue supporting them until the day I die.
            </p>
            <div className="pt-4">
              <Button
                label="Projects"
                onClick={() => router.push("/projects")}
                size={30}
                className="group-hover:translate-x-3 duration-300"
                icon={MdOutlineNavigateNext}
              />
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 w-full justify-center items-center">
            <Image
              alt="Tonbridge School"
              src={"/images/tonbridge.jpg"}
              className="w-full h-1/2 rounded-2xl my-10 md:my-auto"
              height={1200}
              width={1200}
            />
            <span className="pt-6 hidden md:block text-blue-200">My home for 5 years</span>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default AboutPage;
