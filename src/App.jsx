import { ThemeProvider } from "@material-tailwind/react";
import React, { useState } from "react";
import Router from "./router";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
