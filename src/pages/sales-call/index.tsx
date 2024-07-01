import React from "react";

const SalesCall: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-[#FCF7F7] p-4">
      <div className="flex items-center justify-between">
        <button className="text-gray-600">&larr;</button>
        <h1 className="text-xl font-bold">Sales Call</h1>
        <div></div>
      </div>
      <div className="my-4">
        <img
          src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          alt="Amy Chang"
          className="w-full rounded-t-lg"
        />
        <h2 className="text-center text-lg font-semibold mt-2">
          The Future of Work
        </h2>
        <p className="text-center text-gray-600">Amy Chang</p>
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="bg-red-500 text-white p-2 rounded-full">
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
              d="M14.752 11.168l-4.252-2.425A1 1 0 009 9.584v4.832a1 1 0 001.5.868l4.252-2.425a1 1 0 000-1.736z"
            />
          </svg>
        </button>
      </div>
      <div className="text-center font-semibold text-gray-600">
        Amy is talking about the future of work. Listen in.
      </div>
      <div className="flex items-center justify-between mt-4">
        <button className="text-gray-600">Pause</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
          Join
        </button>
        <button className="text-gray-600">End</button>
      </div>
    </div>
  );
};

export default SalesCall;
