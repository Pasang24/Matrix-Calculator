import { useState } from "react";

import { inverse } from "../utils/inverse";
import MatrixLayout from "./MatrixLayout";
import "./Inverse.css";
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
      />
      {showResult && (
        <>
          {result ? (
            <>
              <h2 className="output-title">Inverse: </h2>
              <OutputMatrix dimension={dim}>
                {result.map((row) => {
                  return row.map((el) => (
                    <div className="result-matrix-box">
                      {el.split("/").map((val, indx, arr) => (
                        <span>{`${val}${
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
