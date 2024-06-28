// import { useRef } from "react";
import "./App.css";

// import useFetchToken from "./hooks/twilio";
import { Button } from "./components/buttons";
import BottomNavigation from "./layouts/Navbar";
import { CiUser } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";

const navigationItems = [
  { label: "Prospect", icon: <CiUser size="1.5rem" /> },
  { label: "Insights", icon: <IoBulbOutline size="1.5rem" /> },
  { label: "Colleagues", icon: <HiOutlineUserGroup size="1.5rem" /> },
  { label: "Activities", icon: <BsListTask size="1.5rem" /> },
  { label: "Tasks", icon: <MdTaskAlt size="1.5rem" /> },
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
    <div className="h-[800px] w-[600px]">
      <Button
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
      />

      <BottomNavigation items={navigationItems} />
    </div>
  );
}

export default App;
