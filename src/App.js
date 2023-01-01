import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TextInputs from "./pages/TextInputs";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/text-inputs" element={<TextInputs />} />
    </Routes>
  );
}

export default App;
