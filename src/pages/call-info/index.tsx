import {
  PhoneIcon,
  PencilSquareIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import BottomNavigation from "../../layouts/Navbar";

const CallInformation: React.FC = () => {
  return (
    <>
      <div className="max-w-lg bg-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Call with Alex</h1>
          <button className="text-blue-500">
            <PhoneIcon height="1.5rem" width="1.5rem" />
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <PencilSquareIcon height="1.5rem" width="1.5rem" />
              </div>
              <span>Add a note</span>
            </div>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <CalendarIcon height="1.5rem" width="1.5rem" />
              </div>
              <span>Schedule follow-up</span>
            </div>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <ClockIcon height="1.5rem" width="1.5rem" />
              </div>
              <span>Set next task</span>
            </div>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-2 rounded-full">
            End call
          </button>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default CallInformation;
