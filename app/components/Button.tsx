"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105">
      {label}
      {Icon && <Icon size={25} className="group-hover:rotate-90 duration-300" />}
    </button>
  );
};

export default Button;
