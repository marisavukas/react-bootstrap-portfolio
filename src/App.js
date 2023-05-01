import "./components/WebPage/WebPage.css";
import "terminal.css";
import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { WebPage, AboutMe, Projects } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WebPage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
