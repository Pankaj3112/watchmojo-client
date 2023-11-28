import React from "react";

export const NotFound = () => {
  return (
    <div class="h-[100vh] w-[100vw] overflow-hidden flex justify-center items-center bg-black flex-col relative">
      <div className="img ml-5 scale-150 md:scale-100 lg:scale-75 absolute">
        <img className="w-[100%]" src="/bg.png" />
      </div>

      <p class="word fancy-word text-[5rem] font-semibold">
        <span class="letter">4</span>
        <span class="letter">0</span>
        <span class="letter">4</span>
      </p>

      <div className="flex gap-4 text-[2rem] font-light">
        <p class="word fancy-word">
          <span class="letter">P</span>
          <span class="letter">A</span>
          <span class="letter">G</span>
          <span class="letter">E</span>
        </p>

        <p class="word fancy-word">
          <span class="letter">N</span>
          <span class="letter">O</span>
          <span class="letter">T</span>
        </p>

        <p class="word fancy-word">
          <span class="letter">F</span>
          <span class="letter">O</span>
          <span class="letter">U</span>
          <span class="letter">N</span>
          <span class="letter">D</span>
        </p>
      </div>
    </div>
  );
};
