console.log("Hello world from background script");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "requestMicrophone") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: requestMicrophonePermission,
    });
    sendResponse({ status: "Microphone request sent" });
  }
  return true;
});

function requestMicrophonePermission() {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      console.log("Microphone access granted");
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    })
    .catch((error) => {
      console.error("Error requesting microphone permission", error);
    });
}

// function requestMicrophoneAccess() {
//   return navigator.mediaDevices
//     .getUserMedia({ audio: true })
//     .then((stream) => {
//       console.log("Microphone permission granted");
//       // Stop the tracks to release the microphone
//       stream.getTracks().forEach((track) => track.stop());
//       return;
//     })
//     .catch((err) => {
//       console.error("Microphone permission denied", err);
//       return { success: false, error: err.message };
//     });
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "requestMicrophone") {
//     requestMicrophoneAccess().then((result) => {
//       sendResponse(result);
//     });
//     return true; // Indicates that the response will be sent asynchronously
//   }
// });
