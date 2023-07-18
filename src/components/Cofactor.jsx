import { useState } from "react";

import { cofactor } from "../utils/cofactor";
import MatrixLayout from "./MatrixLayout";
import OutputMatrix from "./OutputMatrix";

function Cofactor() {
  const [dim, setDim] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (dim) => {
    setDim(dim);
  };

  return (
    <div className="container">
      {" "}
      <h2>Cofactor Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={cofactor}
        getDim={getDim}
      />
      {showResult && (
        <>
          <h2 className="output-title">Cofactor Matrix: </h2>
          <OutputMatrix dimension={dim}>
            {result.map((row) => {
              return row.map((el) => (
                <div className="result-matrix-box">
                  <span>{el}</span>
                </div>
              ));
            })}
          </OutputMatrix>
        </>
      )}
    </div>
  );
}

export default Cofactor;
