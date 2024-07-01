// import { useRef } from "react";
// import { useEffect, useState } from "react";
import "./App.css";
import CallInformation from "./pages/call-info";
// import Avatar from "./components/avatar";
// import VoiceVisualizer from "./components/voice";

// import useFetchToken from "./hooks/twilio";

// import BottomNavigation from "./layouts/Navbar";
// import ContactPage from "./pages/contacts";

// import {
//   LightBulbIcon,
//   UserIcon,
//   UserGroupIcon,
//   ListBulletIcon,
//   CheckIcon,
// } from "@heroicons/react/24/outline";
// import ContactList, { AutoDialer } from "./pages/contacts";
// import SalesCall from "./pages/sales-call";

// import { AutoDialer } from "./pages/contacts";
// import useFetchToken from "./hooks/twilio";
// import useSocket from "./hooks/socket";
// import useTwilioDevice from "./hooks/twilio/useTwilioDevice";

// const phoneNumbers = ["+14159652459", "+14154493912", "+14159416576"];

function App() {
  // const { tokenData } = useFetchToken();
  // const { isDeviceReady, connectCall, disconnectAllCalls } = useTwilioDevice({
  //   token: tokenData?.token,
  // });
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isCalling, setIsCalling] = useState(false);
  // const [message, setMessage] = useState<string>("");

  // const handleCallStatus = async (data: any) => {
  //   if (data?.status === "completed") {
  //     await disconnectAllCalls();
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // useSocket(import.meta.env.VITE_SOCKET_URL, { callStatus: handleCallStatus });

  // const handleConferenceCall = async (index: number) => {
  //   if (index >= phoneNumbers.length) {
  //     console.log("All numbers have been called.");
  //     return;
  //   }

  //   const number = phoneNumbers[index];
  //   console.log(`Attempting to call number: ${number}`);
  //   setMessage(`Attempting to call number: ${number}`);
  //   setIsCalling(true);

  //   try {
  //     if (isDeviceReady) {
  //       const params = {
  //         To: number,
  //         callerId: "+14156875897",
  //       };

  //       const callInstance: any = await connectCall(params);
  //       console.log(`Call initiated to ${number}`);
  //       setMessage(`Call initiated to ${number}`);

  //       callInstance.on("accept", () => {
  //         console.log(`Call to ${number} accepted`);
  //         setMessage(`Call to ${number} accepted`);
  //       });

  //       callInstance.on("ringing", () => {
  //         console.log(`Call to ${number} is ringing`);
  //         setMessage(`Call to ${number} is ringing`);
  //       });

  //       callInstance.on("answered", () => {
  //         console.log(`Call to ${number} answered`);
  //         setMessage(`Call to ${number} answered`);
  //       });

  //       callInstance.on("connected", () => {
  //         console.log(`Call to ${number} connected`);
  //         setMessage(`Call to ${number} connected`);
  //       });

  //       callInstance.on("disconnect", () => {
  //         console.log(`Call to ${number} disconnected`);
  //         setMessage(`Call to ${number} disconnected`);
  //         setIsCalling(false);
  //         setCurrentIndex((prevIndex) => prevIndex + 1);
  //       });

  //       callInstance.on("cancel", () => {
  //         console.log(`Call to ${number} cancelled`);
  //         setMessage(`Call to ${number} cancelled`);
  //         setIsCalling(false);
  //         setCurrentIndex((prevIndex) => prevIndex + 1);
  //       });
  //     } else {
  //       console.log("Device is not ready yet. Retrying...");
  //       setIsCalling(false);
  //     }
  //   } catch (error) {
  //     console.error(`Error making call to ${number}:`, error);
  //     setIsCalling(false);
  //   }
  // };

  // useEffect(() => {
  //   if (currentIndex < phoneNumbers.length && isDeviceReady && !isCalling) {
  //     handleConferenceCall(currentIndex);
  //   }
  // }, [currentIndex, isDeviceReady, isCalling]);

  return (
    <div className="min-h-[500px] w-[400px]">
      {/* <ContactList contacts={contacts} /> */}
      {/* <AutoDialer /> */}
      <CallInformation />
      {/* <SalesCall /> */}
    </div>
  );
}

export default App;
