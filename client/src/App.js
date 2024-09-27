import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import Register from "./components/Register";
import Participants from "./components/Participants";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path=":id/register" element={<Register />} />
        <Route path=":id/participants" element={<Participants />} />
      </Routes>
    </Router>
  );
};
