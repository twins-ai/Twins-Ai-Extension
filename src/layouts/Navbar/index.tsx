import {
  UserIcon,
  LightBulbIcon,
  UserGroupIcon,
  ListBulletIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const navigationItems = [
  { label: "Prospect", icon: <UserIcon height="1.5rem" width="1.5rem" /> },
  { label: "Insights", icon: <LightBulbIcon height="1.5rem" width="1.5rem" /> },
  {
    label: "Colleagues",
    icon: <UserGroupIcon height="1.5rem" width="1.5rem" />,
  },
  {
    label: "Activities",
    icon: <ListBulletIcon height="1.5rem" width="1.5rem" />,
  },
  { label: "Tasks", icon: <CheckIcon height="1.5rem" width="1.5rem" /> },
];

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2 border border-t-2 cursor-pointer">
      {navigationItems.map((item, index) => (
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
