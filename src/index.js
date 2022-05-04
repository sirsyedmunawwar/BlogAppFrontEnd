import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BlogData } from "./Components/ContextAPI";

ReactDOM.render(
  <BlogData>
    <App />
  </BlogData>,
  document.getElementById("root")
);
