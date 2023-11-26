import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { generateRandomString } from "../utils";

export const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 430) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  const handleCreateRoom = () => {
    const roomName = generateRandomString();
    navigate(`/room/${roomName}`);
  };

  return (
    <div className="home w-[100vw] h-[100vh] bg-black flex items-center justify-center overflow-hidden ">
      {isMobile && (
        <video
          className="w-[100%] h-[100%] lg:w-[75%] lg:h-[75%] relative p-0 m-0 "
          autoPlay
          loop
          muted
		  preload="auto"
        >
          <source src="/home-mobile.mp4" type="video/mp4" />
        </video>
      )}

      {!isMobile && (
        <video
          className="w-[100%] h-[100%] lg:w-[75%] lg:h-[75%] relative "
          autoPlay
          loop
          muted
		  preload="auto"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
      )}
      <button
        className="absolute bg-[#0000005d] hover:bg-[#0000008d] text-white text-md bottom-[23vh] p-3 rounded-lg font-thin
	  shadow-xl 
	   "
        onClick={handleCreateRoom}
      >
        Create a room
      </button>
    </div>
  );
};
