import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Image,
  spacer,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

import { NavigationBar, PdfPage, WebPage } from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<WebPage />} />

          <Route path="/pdfpage" element={<PdfPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
