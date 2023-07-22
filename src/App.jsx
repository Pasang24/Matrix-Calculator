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
        {/* <Route path="/" element={<h1>Welcome to home page</h1>}></Route> */}
        <Route path="/" element={<GraphTab />} />
        <Route path="/matrix" element={<MatrixTab />} />
        <Route path="/base-n" element={<NumberSystemTab />} />
      </Routes>
    </>
  );
}

export default App;
