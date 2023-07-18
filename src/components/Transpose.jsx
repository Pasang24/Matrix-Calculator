import { useState } from "react";

import { transpose } from "../utils/transpose";
import MatrixLayout from "./MatrixLayout";
import OutputMatrix from "./OutputMatrix";

function Transpose() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (row, col) => {
    setRow(row);
    setColumn(col);
  };

  return (
    <div className="container">
      {" "}
      <h2>Transpose Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={transpose}
        getDim={getDim}
        isSquare={false}
      />
      {showResult && (
        <>
          <h2 className="output-title">Transpose Matrix: </h2>
          <OutputMatrix row={column} col={row} isSquare={false}>
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

export default Transpose;
