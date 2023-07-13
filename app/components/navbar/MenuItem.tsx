"use client";

import { IconType } from "react-icons";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  icon: Icon,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex group px-4 text-blue-400 hover:scale-105 transition font-medium cursor-pointer gap-3">
      {label}
      {Icon && <Icon size={25} className={className} />}
    </div>
  );
};

export default MenuItem;
