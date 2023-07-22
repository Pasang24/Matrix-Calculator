import { Routes, Route } from "react-router-dom";

import MatrixTab from "./components/tab components/MatrixTab.jsx";
import Header from "./components/custom components/Header.jsx";
import NumberSystemTab from "./components/tab components/NumberSystemTab.jsx";
import GraphTab from "./components/tab components/GraphTab.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <h2 style={{ margin: "100px 0", textAlign: "center" }}>
              Under Construction! Please check out other routes/
            </h2>
          }
        />
        <Route path="/matrix" element={<MatrixTab />} />
        <Route path="/base-n" element={<NumberSystemTab />} />
        <Route path="/graph" element={<GraphTab />} />
      </Routes>
    </>
  );
}

export default App;
