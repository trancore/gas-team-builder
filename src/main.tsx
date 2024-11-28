import React from "react";
import ReactDOM from "react-dom/client";

import "~/assets/css/reset.css";
import "~/assets/css/base.css";
import Header from "~/components/Header/Header";
import Content from "./components/Content/Content";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>,
);
