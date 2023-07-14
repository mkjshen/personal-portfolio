"use client";

import Image from "next/image";

interface TechnologyCardProps {
  src: string;
  label: string;
  style?: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  src,
  label,
  style,
}) => {
  return (
    <div
      className={`group shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-slate-950 hover:bg-slate-900`}>
      <Image src={src} className="w-24 mx-auto mt-4" alt="" width={100} height={100}/>
      <p className="my-4 group-hover:text-blue-800">{label}</p>
    </div>
  );
};

export default TechnologyCard;
