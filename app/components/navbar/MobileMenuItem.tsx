"use client";

import Link from "next/link";

interface MobileMenuItemProps {
  label: string;
  route: string;
  onClick: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  label,
  onClick,
  route,
}) => {
  return (
    <div className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
      <Link onClick={onClick} href={route}>
        {label}
      </Link>
    </div>
  );
};

export default MobileMenuItem;
