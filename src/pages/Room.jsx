import React, { useState } from "react";
import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  PreJoin,
} from "@livekit/components-react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../utils";

// const serverUrl = "wss://video-call-ro338xk6.livekit.cloud";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export const Room = () => {
  const { roomname } = useParams();
  const [token, setToken] = useState("");
  const [choices, setChoices] = useState(null);
  const navigate = useNavigate();

  const handleJoinRoom = async (userChoices) => {
    const nickname = userChoices.username;
    if (!nickname || !roomname) return;

    const token = await getToken(nickname, roomname);
    setChoices(userChoices);
    setToken(token);
  };

  const handleDisconnected = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      {!token && (
        <div
          className="w-[100vw] h-[100vh] bg-[#111] flex justify-center items-center
		 [&_.lk-button]:bg-[#1e1e1e] [&_.lk-button]:text-white [&_.lk-button]:rounded-md
		 [&_#username]:p-2 [&_#username]:rounded-md [&_#username]:bg-[#1e1e1e] [&_#username]:text-white
		 [&_video]:rounded-md
		 [&_.lk-button.lk-button-menu]:bg[#181818] [&_.lk-button.lk-button-menu]:rounded-l-none 
		 [&_.lk-device-menu_ul]:bg-blue-200 [&_.lk-device-menu_ul]:rounded-lg "
        >
          <PreJoin onSubmit={handleJoinRoom}></PreJoin>
        </div>
      )}
      {token && (
        <LiveKitRoom
          video={choices.videoEnabled}
          audio={choices.audioEnabled}
          token={token}
          serverUrl={serverUrl}
          data-lk-theme="default"
          style={{ height: "100vh" }}
          onDisconnected={handleDisconnected}
        >
          <VideoConference />
          <CopyLink />
        </LiveKitRoom>
      )}
    </>
  );
};

const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="absolute bottom-0 left-0 m-4">
      <button
        className="bg-[#1e1e1e] text-white rounded-md p-2 w-28"
        onClick={handleCopy}
        disabled={copied}
      >
        {copied ? "Copied ✅" : "Copy Link 📄"}
      </button>
    </div>
  );
};
