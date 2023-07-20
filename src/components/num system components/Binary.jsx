import { useState } from "react";
import { baseNdigits } from "../../utils/baseNdigits";
import InputLayout from "../num system layouts/InputLayout";

function Binary() {
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h2>Enter Binary Number:</h2>
      <InputLayout
        base={2}
        digits={baseNdigits(2)}
        setResults={setResults}
        setShowResult={setShowResult}
      />
      {showResult && (
        <div className="base-results-wrapper">
          {results.map((result, indx) => {
            return (
              <h2 key={indx}>
                {result.base}: {result.value || "0"}
              </h2>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Binary;
