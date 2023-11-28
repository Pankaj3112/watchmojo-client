import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Room, NotFound } from "./pages";
import "./index.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomname" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
