console.log("Hello world from background script");

// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Extension installed");
// });

// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//   if (request.action === "requestMicrophone") {
//     const tab = await getCurrentTab();
//     if (!tab) return alert("Require an active tab");
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id as number },
//       files: ["content-script.js"],
//     });
//   }
//   return true;
// });

// async function getCurrentTab() {
//   const queryOptions = { active: true, lastFocusedWindow: true };
//   const [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// navigator.mediaDevices
//   .getDisplayMedia({ video: true, audio: true })
//   .then(async (screenStream) => {
//     if (!apiKey)
//       return alert("You must provide a Deepgram API Key in the options page.");
//     if (screenStream.getAudioTracks().length == 0)
//       return alert("You must share your tab with audio. Refresh the page.");

//     const micStream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//     });

//     const audioContext = new AudioContext();
//     const mixed = mix(audioContext, [screenStream, micStream]);
//     const recorder = new MediaRecorder(mixed, { mimeType: "audio/webm" });

//     recorder.addEventListener("dataavailable", (evt) => {
//       if (evt.data.size > 0 && socket.readyState == 1) socket.send(evt.data);
//     });

//     socket.onopen = () => {
//       recorder.start(250);
//     };

//     socket.onmessage = (msg) => {
//       const { transcript } = JSON.parse(msg.data).channel.alternatives[0];
//       if (transcript) {
//         console.log(transcript);
//         chrome.storage.local.get("transcript", (data) => {
//           chrome.storage.local.set({
//             transcript: (data.transcript += " " + transcript),
//           });

//           chrome.runtime
//             .sendMessage({ message: "transcriptavailable" })
//             .catch((err) => ({}));
//         });
//       }
//     };
//   });

// function mix(audioContext: any, streams: any) {
//   const dest = audioContext.createMediaStreamDestination();
//   streams.forEach((stream: any) => {
//     const source = audioContext.createMediaStreamSource(stream);
//     source.connect(dest);
//   });
//   return dest.stream;
// }
