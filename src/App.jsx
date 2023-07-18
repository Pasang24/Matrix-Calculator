import { Routes, Route } from "react-router-dom";

import MatrixTab from "./components/MatrixTab";
import Header from "./components/Header";
import Determinant from "./components/Determinant";
import Inverse from "./components/Inverse";
import Cofactor from "./components/Cofactor";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Welcome to home page</h1>}></Route>
        <Route path="/matrix/" element={<MatrixTab />} />
      </Routes>
    </>
  );
}

export default App;
