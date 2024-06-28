import React from "react";
import ReactDOM from "react-dom/client";
import "./content.css";
import ContentApp from "./ContentApp";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

console.log("Hello world from content script");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ContentApp />
  </React.StrictMode>
);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "requestMicrophone") {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.log("Microphone access granted");
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        sendResponse({ status: "Microphone access granted" });
      })
      .catch((error) => {
        console.error("Error requesting microphone permission", error);
        sendResponse({
          status: "Error requesting microphone permission",
          error: error,
        });
      });
    return true; // Keep the message channel open for sendResponse
  }
});
