import React from "react";
import ReactDOM from "react-dom/client";
import "~/assets/css/reset.css";
import "~/assets/css/base.css";
import Header from "~/components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main>content</main>
  </React.StrictMode>,
);
