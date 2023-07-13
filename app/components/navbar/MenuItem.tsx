"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 text-blue-400 hover:scale-105 transition font-medium cursor-pointer">
      {label}
    </div>
  );
};

export default MenuItem;
