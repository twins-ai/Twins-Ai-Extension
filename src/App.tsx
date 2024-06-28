// import { useRef } from "react";
import "./App.css";
import Avatar from "./components/avatar";
import VoiceVisualizer from "./components/voice";

// import useFetchToken from "./hooks/twilio";

import BottomNavigation from "./layouts/Navbar";
import ContactPage from "./pages/contacts";

import {
  LightBulbIcon,
  UserIcon,
  UserGroupIcon,
  ListBulletIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

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

function App() {
  // const { tokenData } = useFetchToken();
  // const device = useRef(null);

  // const handleConferenceCall = async () => {
  //   try {
  //     if (!device.current) {
  //       device.current = new Device(tokenData?.token, {
  //         codecPreferences: ["opus", "pcmu"], // Adjust codec preferences as needed
  //       });

  //       device.current.register();

  //       const params = {
  //         To: "+14154493912",
  //         callerId: "+14156875897",
  //       };

  //       const callInstance = await device.current.connect({ params });

  //       callInstance.on("accept", () => {});

  //       callInstance.on("ringing", () => {});

  //       callInstance.on("answered", () => {});

  //       callInstance.on("connected", () => {});

  //       callInstance.on("disconnect", () => {});

  //       callInstance.on("cancel", () => {});
  //     }
  //   } catch (error) {
  //     console.error("Error making call:", error);
  //   }
  // };

  // const onClickHandler = async () => {
  //   const [tab] = await chrome.tabs.query({
  //     active: true,
  //     currentWindow: true,
  //   });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id! },
  //     func: handleConferenceCall,
  //   });
  // };

  return (
    <div className="h-[800px] w-[400px]">
      <ContactPage />

      <div className="flex justify-center items-center h-[200px]">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Avatar"
          status="online"
        />
        <div>
          <h2 className="mb-4 ml-4 mt-2 text-sm font-semibold text-gray-600">
            Subhashish Jung Shah
          </h2>
          <h2 className="ml-4  text-xs font-semibold text-gray-500">
            Full Stack Developer
          </h2>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center h-[100px]">
        <VoiceVisualizer />
        <h2 className="mb-4 mt-4 text-sm font-semibold text-green-400">
          Active
        </h2>
      </div>
      {/* <Button
        text="Primary Filled Small"
        color="primary"
        variant="filled"
        size="small"
        onClick={() => alert("Clicked!")}
      />
      <Button
        text="Secondary Outlined Medium"
        color="secondary"
        variant="filled"
        size="medium"
        onClick={() => alert("Clicked!")}
      />
      <Button
        text="Primary Text Large"
        color="primary"
        variant="filled"
        size="large"
        onClick={() => alert("Clicked!")}
      /> */}
      <BottomNavigation items={navigationItems} />
    </div>
  );
}

export default App;
