import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (
  url: string,
  handlers: { [event: string]: (...args: any[]) => void }
) => {
  useEffect(() => {
    const socket: Socket = io(url, {
      autoConnect: false,
    });

    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected successfully");
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    Object.keys(handlers).forEach((event) => {
      socket.on(event, handlers[event]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      Object.keys(handlers).forEach((event) => {
        socket.off(event, handlers[event]);
      });
      socket.disconnect();
    };
  }, [url, handlers]);
};

export default useSocket;
