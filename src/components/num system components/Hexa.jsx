import { useState } from "react";
import { baseNdigits } from "../../utils/baseNdigits";
import InputLayout from "../num system layouts/InputLayout";

function Hexa() {
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h2>Enter HexaDecimal Number:</h2>
      <InputLayout
        base={16}
        digits={baseNdigits(16)}
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

export default Hexa;
