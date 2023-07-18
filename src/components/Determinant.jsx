import { useState } from "react";
import MatrixLayout from "./MatrixLayout.jsx";
import { determinant } from "../utils/determinant.js";

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
      {showResult && <h2>Determinant: {result}</h2>}
    </div>
  );
}

export default Determinant;
