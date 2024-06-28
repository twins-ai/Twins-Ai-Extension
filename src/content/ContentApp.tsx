import { Device } from "@twilio/voice-sdk";
import React, { useRef } from "react";
import useFetchToken from "../hooks";

const ContentApp: React.FC = () => {
  const requestMicrophoneAccess = () => {
    chrome.runtime.sendMessage({ action: "requestMicrophone" }, (response) => {
      console.log(response.status);
    });
  };
  const { tokenData } = useFetchToken();

  const device = useRef<Device | null>(null);

  const handleConferenceCall = async () => {
    try {
      if (!device.current) {
        device.current = new Device(tokenData?.token, {
          codecPreferences: ["opus", "pcmu"], // Adjust codec preferences as needed
        });

        device.current.register();

        const params = {
          To: "+14154493912",
          callerId: "+14156875897",
        };

        const callInstance = await device.current.connect({ params });

        callInstance.on("accept", () => {});

        callInstance.on("ringing", () => {});

        callInstance.on("answered", () => {});

        callInstance.on("connected", () => {});

        callInstance.on("disconnect", () => {});

        callInstance.on("cancel", () => {});
      }
    } catch (error) {
      console.error("Error making call:", error);
    }
  };

  return (
    <div>
      <h1>Hello from Content App</h1>
      <button onClick={requestMicrophoneAccess}>
        Request Microphone Access
      </button>
      <button onClick={handleConferenceCall}>Make call</button>
    </div>
  );
};

export default ContentApp;
