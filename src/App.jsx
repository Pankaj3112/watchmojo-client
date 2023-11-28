import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Room } from "./pages";
import "./index.css";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomname" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
