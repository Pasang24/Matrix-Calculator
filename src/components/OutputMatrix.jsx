import "./OutputMatrix.css";

function OutputMatrix({ dimension, children }) {
  return (
    <div
      className="result-matrix-container"
      style={{
        gridTemplateRows: `repeat(${dimension}, 1fr)`,
        gridTemplateColumns: `repeat(${dimension}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default OutputMatrix;
