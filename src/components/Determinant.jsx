import { useState, useEffect } from "react";
import { determinant } from "../utils/determinant.js";

function Determinant() {
  const [dimension, setDimension] = useState(2);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
      const ans = determinant(matrixArr);

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
      setResult(0);
    }
  };

  const renderMatrix = Array(dimension * dimension)
    .fill(0)
    .map((_, indx) => {
      return (
        <input
          style={{
            border: "1px solid black",
            width: "50px",
            outline: "none",
            padding: "2px",
            fontSize: "20px",
            textAlign: "center",
          }}
          key={indx}
          className="matrix-box"
          id={indx}
        ></input>
      );
    });
  return (
    <div>
      {" "}
      <h2>Determinant Calculator</h2>
      <input
        type="number"
        onChange={handleChange}
        value={dimension || ""}
        min={0}
        placeholder="Enter Dimension of Matrix"
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px",
          fontSize: "20px",
          outline: "none",
          border: "1px solid black",
          borderRadius: "3px",
        }}
      />
      {dimension > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Enter elements of {dimension} x {dimension} matrix
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${dimension}, 1fr)`,
              gridTemplateColumns: `repeat(${dimension}, 1fr)`,
              border: "1px solid black",
              width: "fit-content",
              aspectRatio: "1/1",
            }}
          >
            {renderMatrix}
          </div>
          <div>
            <button
              onClick={handleCalculate}
              style={{
                cursor: "pointer",
                padding: "10px 14px",
                fontSize: "18px",
                marginRight: "20px",
              }}
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              style={{
                cursor: "pointer",
                padding: "10px 14px",
                fontSize: "18px",
              }}
            >
              Reset
            </button>
          </div>
          {showResult && <h3>Determinant: {result}</h3>}
        </div>
      )}
    </div>
  );
}

export default Determinant;
