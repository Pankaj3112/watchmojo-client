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
    <div className="home w-[100vw] h-[100vh] bg-black flex items-center justify-center overflow-hidden relative">
      <div>
        <div className="img ml-5 scale-150 md:scale-100 lg:scale-75">
          <img className="w-[100%]" src="/bg.png" />
        </div>
		<div className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center w-full sm:w-[50%] p-4">
			<p className="text-4xl mb-9 md:text-5xl">WATCHMOJO</p>
			<p className="text-md md:text-xl font-light">Organise mettings effortlessly without creating an account and slow planning.</p>
		</div>
      </div>
      <button
        className="absolute bg-[#0000005d] hover:bg-[#0000008d] text-white text-md bottom-[15vh] md:bottom-[23vh] p-3 rounded-lg font-thin
	  shadow-xl w-[60%] sm:w-[30%] md:w-56 border-[1px]
	   "
        onClick={handleCreateRoom}
      >
        Create a room
      </button>
    </div>
  );
};
