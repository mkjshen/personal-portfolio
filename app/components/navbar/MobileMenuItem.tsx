"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface MobileMenuItemProps {
  label: string;
  route: string;
  onClick: () => void;
  icon?: IconType;
  className?: string;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  label,
  onClick,
  route,
  icon: Icon,
  className,
}) => {
  return (
    <div className="flex gap-3 px-4 group cursor-pointer py-6 text-4xl hover:scale-105 duration-300">
      <Link onClick={onClick} href={route}>
        {label}
      </Link>
      {Icon && <Icon className={`${className}`} size={45} />}
    </div>
  );
};

export default MobileMenuItem;
