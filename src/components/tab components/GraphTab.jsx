import { useEffect } from "react";

function GraphTab() {
  useEffect(() => {
    const graphEl = document.getElementById("calculator");
    const graphCalc = Desmos.GraphingCalculator(graphEl);
  }, []);
  return <div id="calculator"></div>;
}

export default GraphTab;
