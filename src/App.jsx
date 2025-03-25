import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Verify from "./Components/Verify"; // Import Verify Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/verify" element={<Verify />} />  {/* Verify Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
