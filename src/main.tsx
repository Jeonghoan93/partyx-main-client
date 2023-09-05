import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import RootLayout from "./Layouts/RootLayout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <RootLayout>
        <App searchParams={{}} />
      </RootLayout>
    </Router>
  </React.StrictMode>
);
