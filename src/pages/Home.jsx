import React from "react";
import { useNavigate } from "react-router-dom";

import { generateRandomString } from "../utils";

export const Home = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const roomName = generateRandomString();
    navigate(`/room/${roomName}`);
  };

  return (
    <div className="home h-[100vh] bg-black flex items-center justify-center overflow-hidden">
      <video className="w-[100%] h-[100%] lg:w-[75%] lg:h-[75%] relative" autoPlay loop muted>
        <source src="/home.mp4" type="video/mp4" />
      </video>
      <button
        className="absolute bg-[#0000005d] text-white text-md bottom-[23vh] p-3 rounded-lg font-thin
	  shadow-xl hover:bg-[#0000008d]
	   "
        onClick={handleCreateRoom}
      >
        Create a room
      </button>
    </div>
  );
};
