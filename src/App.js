import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavigationBar, WebPage } from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<WebPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
