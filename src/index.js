import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";

const $root = document.getElementById("root");
const renderOrHydrate = $root.hasChildNodes() ? hydrate : render;

renderOrHydrate(<App />, $root);
