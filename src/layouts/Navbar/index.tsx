import React from "react";

interface BottomNavigationProps {
  items: { label: string; icon: React.ReactNode }[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
