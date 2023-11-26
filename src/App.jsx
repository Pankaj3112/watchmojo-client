import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Room } from "./pages";
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomname" element={<Room />} />
      </Routes>
    </>
  );
};

export default App;
