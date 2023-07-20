import { useState } from "react";
import { baseNdigits } from "../../utils/baseNdigits";
import InputLayout from "../num system layouts/InputLayout";

function Decimal() {
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h2>Enter Decimal Number:</h2>
      <InputLayout
        base={10}
        digits={baseNdigits(10)}
        setResults={setResults}
        setShowResult={setShowResult}
      />
      {showResult && (
        <div>
          {results.map((result, indx) => {
            return (
              <div key={indx}>
                <h2>
                  {result.base}: {result.value || "0"}
                </h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Decimal;
