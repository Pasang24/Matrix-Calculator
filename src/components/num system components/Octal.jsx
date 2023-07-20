import { useState } from "react";
import { baseNdigits } from "../../utils/baseNdigits";
import InputLayout from "../num system layouts/InputLayout";

function Octal() {
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h2>Enter Octal Number:</h2>
      <InputLayout
        base={8}
        digits={baseNdigits(8)}
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

export default Octal;
