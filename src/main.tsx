import React from "react";
import ReactDOM from "react-dom/client";

import "~/assets/css/reset.css";
import "~/assets/css/base.css";
import Header from "~/components/Header/Header";
import Content from "./components/Content/Content";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <DndProvider backend={HTML5Backend}>
      <Content />
    </DndProvider>
  </React.StrictMode>,
);
