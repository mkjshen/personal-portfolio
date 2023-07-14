"use client";

import useProjectModal from "@/app/hooks/useProjectModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { BsCodeSlash } from "react-icons/bs";

interface ProjectCardProps {
  src: string;
  label: string;
  href: string;
  handleClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  label,
  href,
  handleClick,
}) => {
  const router = useRouter();
  const projectModal = useProjectModal();

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg pb-4">
      <Image
        className="rounded-md hover:scale-110 duration-200"
        src={src}
        alt={label}
        height={800}
        width={800}
      />
      <div className="flex flex-col items-center justify-center">
        <span className="pb-2 pt-4 cursor-default font-bold text-gray-400">{label}</span>
        <a href={href} target="_blank" rel="norefferer">
          <Button
            label="Source Code"
            onClick={() => {}}
            icon={BsCodeSlash}
            size={25}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
