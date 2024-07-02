import React, { useEffect, useState } from "react";
import useFetchToken from "../../hooks/twilio";
import useTwilioDevice from "../../hooks/twilio/useTwilioDevice";
import useSocket from "../../hooks/socket";

const SalesCall: React.FC = ({ contacts }: any) => {
  const { tokenData } = useFetchToken();
  const { isDeviceReady, connectCall, disconnectAllCalls } = useTwilioDevice({
    token: tokenData?.token,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleCallStatus = async (data: any) => {
    if (data?.status === "completed") {
      await disconnectAllCalls();
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useSocket(import.meta.env.VITE_SOCKET_URL, { callStatus: handleCallStatus });

  const handleConferenceCall = async (index: number) => {
    if (index >= contacts.length) {
      console.log("All numbers have been called.");
      return;
    }

    const contact = contacts[index];
    console.log(`Attempting to call number: ${contact.phone}`);
    setMessage(`Attempting to call number: ${contact.phone}`);
    setIsCalling(true);

    try {
      if (isDeviceReady) {
        const params = {
          To: contact.phone,
          callerId: "+14156875897",
        };

        const callInstance: any = await connectCall(params);
        console.log(`Call initiated to ${contact.phone}`);
        setMessage(`Call initiated to ${contact.phone}`);

        callInstance.on("accept", () => {
          console.log(`Call to ${contact.phone} accepted`);
          setMessage(`Call to ${contact.phone} accepted`);
        });

        callInstance.on("ringing", () => {
          console.log(`Call to ${contact.phone} is ringing`);
          setMessage(`Call to ${contact.phone} is ringing`);
        });

        callInstance.on("answered", () => {
          console.log(`Call to ${contact.phone} answered`);
          setMessage(`Call to ${contact.phone} answered`);
        });

        callInstance.on("connected", () => {
          console.log(`Call to ${contact.phone} connected`);
          setMessage(`Call to ${contact.phone} connected`);
        });

        callInstance.on("disconnect", () => {
          console.log(`Call to ${contact.phone} disconnected`);
          setMessage(`Call to ${contact.phone} disconnected`);
          setIsCalling(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        });

        callInstance.on("cancel", () => {
          console.log(`Call to ${contact.phone} cancelled`);
          setMessage(`Call to ${contact.phone} cancelled`);
          setIsCalling(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        });
      } else {
        console.log("Device is not ready yet. Retrying...");
        setIsCalling(false);
      }
    } catch (error) {
      console.error(`Error making call to ${contact.phone}:`, error);
      setIsCalling(false);
    }
  };

  useEffect(() => {
    if (currentIndex < contacts.length && isDeviceReady && !isCalling) {
      handleConferenceCall(currentIndex);
    }
  }, [currentIndex, isDeviceReady, isCalling, contacts]);

  return (
    <div className="max-w-sm mx-auto bg-[#FCF7F7] p-4">
      <div className="flex items-center justify-between">
        <button className="text-gray-600">&larr;</button>
        <h1 className="text-xl font-bold">Sales Call</h1>
        <div></div>
      </div>
      {contacts[currentIndex] && (
        <div className="my-4">
          <img
            src={contacts[currentIndex].avatar}
            alt={contacts[currentIndex].name}
            className="w-full rounded-t-lg"
          />
          <h2 className="text-center text-lg font-semibold mt-2">
            {contacts[currentIndex].title}
          </h2>
          <p className="text-center text-gray-600">
            {contacts[currentIndex].name}
          </p>
        </div>
      )}
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
        {message || "Amy is talking about the future of work. Listen in."}
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
