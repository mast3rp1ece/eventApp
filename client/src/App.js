import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events";

export const App = () => {
  return (
    <div className="bg-gray-800 p-7">
      <Router>
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};
