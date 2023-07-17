import { useState, useEffect } from "react";
import MatrixLayout from "./MatrixLayout.jsx";
import { determinant } from "../utils/determinant.js";
import "./Determinant.css";

function Determinant() {
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      {" "}
      <h2>Determinant Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        showResult={showResult}
        setShowResult={setShowResult}
        method={determinant}
      />
      {showResult && <h3>Determinant: {result}</h3>}
    </div>
  );
}

export default Determinant;
