import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import Register from "./components/Register";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path=":id/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
