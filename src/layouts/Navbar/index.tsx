import React from "react";

interface BottomNavigationProps {
  items: { label: string; icon: React.ReactNode }[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2 border border-t-2">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {item.icon}

          <h2 className=" m-2 text-xs font-semibold text-gray-500">
            {item.label}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
