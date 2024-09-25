import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./reset.css";
import "./App.css";

const appElement = document.getElementById("app");

const root = createRoot(appElement);
root.render(<App />);
