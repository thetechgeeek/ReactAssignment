import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/apply/step1" element={<Step1 />} exact />
        <Route path="/apply/step2" element={<Step2 />} exact />
        <Route path="/apply/step3" element={<Step3 />} exact />
        <Route path="/" element={<Apply />} exact />
      </Routes>
    </BrowserRouter>
  );
}

function Apply() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem", marginTop: "2rem" }}>Apply here</h1>
      <Link to="/apply/step1">
        <button type="default">Click to Apply</button>
      </Link>
    </div>
  );
}

export default App;
