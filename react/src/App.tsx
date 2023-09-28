import React from "react";
import { ModalProvider } from "./contexts/modalContext";
import "./index.css";
import AppRoutes from "./router";

function App() {
  return (
    <React.StrictMode>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </React.StrictMode>
  );
}

export default App;
