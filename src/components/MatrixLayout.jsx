import { useState, useEffect } from "react";
import "./MatrixLayout.css";

function MatrixLayout({
  setResult,
  showResult,
  setShowResult,
  method,
  getDim,
}) {
  const [dimension, setDimension] = useState(2);

  useEffect(() => {
    handleReset();
  }, [dimension]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    setDimension(value);
    setShowResult(false);
    setResult(0);
  };

  const handleCalculate = () => {
    let rowMatrix = [];
    const matrixArr = [];
    let hasError = false;
    const boxes = document.querySelectorAll(".matrix-box");
    try {
      boxes.forEach((box) => {
        const value = parseInt(box.value);
        if (isNaN(value)) {
          throw new Error("Please give valid input");
        }

        const col = parseInt(box.id) % dimension;
        rowMatrix.push(value);

        if (col === dimension - 1) {
          matrixArr.push(rowMatrix);
          rowMatrix = [];
        }
      });
    } catch (err) {
      hasError = true;
      alert(err);
    }

    if (!hasError) {
      const ans = method(matrixArr);
      if (getDim) getDim(dimension);
      setResult(ans);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    const boxes = document.querySelectorAll(".matrix-box");

    boxes.forEach((box) => {
      box.value = "";
    });

    if (showResult) {
      setShowResult(false);
      setResult(null);
    }
  };

  const renderMatrix = Array(dimension * dimension)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box" key={indx} id={indx}></input>;
    });

  return (
    <>
      <input
        className="dimension-input"
        type="number"
        onChange={handleChange}
        value={dimension || ""}
        min={0}
        placeholder="Enter Dimension of Matrix"
      />
      {dimension > 0 && (
        <div className="matrix-wrapper">
          <h2 style={{ textAlign: "center" }}>
            Enter elements of {dimension} x {dimension} matrix
          </h2>
          <div
            className="matrix-container"
            style={{
              gridTemplateRows: `repeat(${dimension}, 1fr)`,
              gridTemplateColumns: `repeat(${dimension}, 1fr)`,
            }}
          >
            {renderMatrix}
          </div>
          <div className="btn-container">
            <button onClick={handleCalculate} className="btn calc-btn">
              Calculate
            </button>
            <button onClick={handleReset} className="btn reset-btn">
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MatrixLayout;
