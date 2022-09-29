import React from "react";
import ReactDOM from "react-dom";
import { Builder } from "./pages";

import "./styles/main.css";

const App: React.FC = () => {
  return <Builder />;
};

ReactDOM.render(<App />, document.getElementById("root"));
