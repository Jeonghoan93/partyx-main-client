import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RootLayout from "./Layouts/RootLayout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <App searchParams={{}} />
    </RootLayout>
  </React.StrictMode>
);
