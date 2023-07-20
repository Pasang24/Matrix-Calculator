import { useState } from "react";

import { inverse } from "../utils/inverse";
import MatrixLayout from "./MatrixLayout";
import OutputMatrix from "./OutputMatrix";

function Inverse() {
  const [dim, setDim] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (dim) => {
    setDim(dim);
  };

  return (
    <div className="container">
      {" "}
      <h2>Inverse Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={inverse}
        getDim={getDim}
        isSquare={true}
      />
      {showResult && (
        <>
          {result ? (
            <>
              <h2 className="output-title">Inverse Matrix: </h2>
              <OutputMatrix row={dim} col={dim}>
                {result.map((row) => {
                  return row.map((el, indx) => (
                    <div className="result-matrix-box" key={indx}>
                      {el.split("/").map((val, indx, arr) => (
                        <span key={indx}>{`${val}${
                          indx < arr.length - 1 ? "/" : ""
                        }`}</span>
                      ))}
                    </div>
                  ));
                })}
              </OutputMatrix>
            </>
          ) : (
            <h2>Inverse doesn't exist</h2>
          )}
        </>
      )}
    </div>
  );
}

export default Inverse;
