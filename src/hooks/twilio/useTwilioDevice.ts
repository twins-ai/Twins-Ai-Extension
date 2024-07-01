import { useState, useEffect, useRef } from "react";
import { Device } from "@twilio/voice-sdk";

interface UseTwilioDeviceProps {
  token: string;
}

const useTwilioDevice = ({ token }: UseTwilioDeviceProps) => {
  const device = useRef<Device | null>(null);
  const [isDeviceReady, setIsDeviceReady] = useState(false);

  useEffect(() => {
    if (token) {
      console.log("Initializing Twilio Device with token.");
      device.current = new Device(token, {
        codecPreferences: ["opus", "pcmu"],
      });

      device.current.register();

      device.current.on("registered", () => {
        console.log("Device registered.");
        setIsDeviceReady(true);
      });

      device.current.on("error", (error) => {
        console.error("Device registration error:", error);
      });
    }
  }, [token]);

  const connectCall = async (params: any) => {
    if (!device.current) {
      throw new Error("Device is not initialized");
    }

    return await device.current.connect({ params });
  };

  const disconnectAllCalls = async () => {
    if (!device.current) {
      throw new Error("Device is not initialized");
    }

    return await device.current.disconnectAll();
  };

  return { isDeviceReady, connectCall, disconnectAllCalls };
};

export default useTwilioDevice;
