"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import ClientOnly from "./components/ClientOnly";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  return (
    <ClientOnly>
      <div className="text-blue-400 h-screen max-w-[2520px] mx-auto p-20">
        <div className="max-w-screen-lg flex flex-col md:flex-row items-center justify-center px-4 mx-auto mt-20">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-7xl font-extrabold text-white">
              Software Engineer
            </h2>
            <p className="text-blue-300 py-6 max-w-md">
              Hi, my name is Mitchel and I am currently double majoring in
              Computer Science and Finance at the University of Waterloo. In my
              free time, I enjoy being active by going to the gym and playing football.
            </p>
            <p className="text-blue-500 py- max-w-md">
              Most opportunities are created by luck. It takes skill to grasp
              those opportunities and turn it into success. - Technoblade
            </p>
            <div className="pt-4">
              <Button
                label="Projects"
                onClick={() => router.push("/projects")}
                icon={MdKeyboardArrowRight}
              />
            </div>
          </div>
          <div className="md:block hidden">
            <Image
              alt="My profile"
              className="rounded-2xl mx-auto md:w-full w-2/3"
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
