import { useState, useEffect } from "react";
import "./DoubleMatrixLayout.css";

function DoubleMatrixLayout({
  setResult,
  showResult,
  setShowResult,
  method,
  getDim,
}) {
  const [row1, setRow1] = useState(2);
  const [row2, setRow2] = useState(2);
  const [column1, setColumn1] = useState(2);
  const [column2, setColumn2] = useState(2);

  const handleChange1 = (event, isRow) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    if (isRow) setRow1(value);
    else {
      setColumn1(value);
      setRow2(value);
    }
    setShowResult(false);
    setResult(0);
  };
  const handleChange2 = (event, isRow) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    if (isRow) {
      setRow2(value);
      setColumn1(value);
    } else setColumn2(value);
    setShowResult(false);
    setResult(0);
  };

  const renderMatrix1 = Array(row1 * column1)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box-1" key={indx} id={indx}></input>;
    });

  const renderMatrix2 = Array(row2 * column2)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box-2" key={indx} id={indx}></input>;
    });

  return (
    <div>
      <div className="matrix12-wrapper">
        <div className="matrix1-wrapper">
          <h3>Matrix A:</h3>
          <div className="dimension-input-wrapper">
            <h3>Row:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange1(event, true)}
              value={row1 || ""}
              min={0}
            />
          </div>

          <div className="dimension-input-wrapper">
            <h3>Column:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange1(event, false)}
              value={column1 || ""}
              min={0}
            />
          </div>
          <div className="matrix-wrapper">
            <h2 style={{ textAlign: "center" }}>
              Enter elements of {row1} x {column1} matrix
            </h2>
            <div
              className="matrix-container"
              style={{
                gridTemplateRows: `repeat(${row1}, 1fr)`,
                gridTemplateColumns: `repeat(${column1}, 1fr)`,
              }}
            >
              {renderMatrix1}
            </div>
          </div>
        </div>
        <div className="matrix2-wrapper">
          <h3>Matrix B:</h3>
          <div className="dimension-input-wrapper">
            <h3>Row:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange2(event, true)}
              value={row2 || ""}
              min={0}
            />
          </div>

          <div className="dimension-input-wrapper">
            <h3>Column:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange2(event, false)}
              value={column2 || ""}
              min={0}
            />
          </div>
          <div className="matrix-wrapper">
            <h2 style={{ textAlign: "center" }}>
              Enter elements of {row2} x {column2} matrix
            </h2>
            <div
              className="matrix-container"
              style={{
                gridTemplateRows: `repeat(${row2}, 1fr)`,
                gridTemplateColumns: `repeat(${column2}, 1fr)`,
              }}
            >
              {renderMatrix2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubleMatrixLayout;
