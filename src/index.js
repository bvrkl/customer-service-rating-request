import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/App";

const render = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};

render();
