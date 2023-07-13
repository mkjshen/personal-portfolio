"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import ClientOnly from "./components/ClientOnly";
import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  return (
    <ClientOnly>
      <div className="text-blue-400 h-full max-w-[2520px] mx-auto py-8 md:py-24 md:h-screen justify-center">
        <div className="max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto mt-16 2xl:mt28 px-10">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-6xl md:text-7xl font-extrabold text-white">
              Software Engineer
            </h2>
            <p className="text-blue-300 py-6 max-w-md">
              Hi, my name is Mitchel and I am currently double majoring in
              Computer Science and Finance at the University of Waterloo. In my
              free time, I enjoy being active by going to the gym and playing football.
            </p>
            <p className="text-blue-500 max-w-md">
              Most opportunities are created by luck. It takes skill to grasp
              those opportunities and turn it into success. - Technoblade
            </p>
            <div className="pt-4">
              <Button
                label="About Me"
                onClick={() => router.push("/about")}
                icon={MdOutlineNavigateNext}
                className="group-hover:translate-x-3 duration-300"
                size={30}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 pt-10 md:pt-0">
            <Image
              alt="My profile"
              className="rounded-2xl mx-auto"
              src="/images/profile.jpg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}
