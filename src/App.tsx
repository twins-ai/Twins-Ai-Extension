import { useRef } from "react";
import "./App.css";
import { Device } from "@twilio/voice-sdk";
import useFetchToken from "./hooks";

function App() {
  const { tokenData } = useFetchToken();
  const device = useRef(null);

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

  const onClickHandler = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: handleConferenceCall,
    });
  };

  return (
    <div className="h-[1000px] w-[500px]">
      {tokenData?.token}
      <button onClick={onClickHandler}>Enable Mic and Make Call</button>
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
