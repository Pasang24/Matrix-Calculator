import { useState } from "react";

import { product } from "../utils/product";
import OutputMatrix from "./OutputMatrix";
import DoubleMatrixLayout from "./DoubleMatrixLayout";

function MatrixProduct() {
  const [row1, setRow1] = useState(2);
  const [row2, setRow2] = useState(2);
  const [column1, setColumn1] = useState(2);
  const [column2, setColumn2] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (row1, col1, row2, col2) => {
    setRow1(row1);
    setRow2(row2);
    setColumn1(col1);
    setColumn2(col2);
  };

  return (
    <div className="container">
      <h2>Matrix Product Calculator</h2>
      <DoubleMatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={product}
        getDim={getDim}
      />
      {showResult && (
        <>
          <h2 className="output-title">Product: </h2>
          <OutputMatrix row={row1} col={column2}>
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

export default MatrixProduct;
