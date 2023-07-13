"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="cursor-pointer hover:scale-105 transition"
      height={150}
      width={150}
      src="/images/logo.png"
    />
  );
};

export default Logo;
