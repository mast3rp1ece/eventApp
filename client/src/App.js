import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Router>
  );
};
