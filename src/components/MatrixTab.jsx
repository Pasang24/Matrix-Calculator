import SideBar from "./SideBar";
import Determinant from "./Determinant";
import Inverse from "./Inverse";
import Cofactor from "./Cofactor";
import { useState } from "react";
import Adjoint from "./Adjoint";
import Transpose from "./Transpose";
import MatrixProduct from "./MatrixProduct";
import RowEchelon from "./RowEchelon";
import ReducedRowEchelon from "./ReducedRowEchelon";

function MatrixTab() {
  const [currentTab, setCurrentTab] = useState("Determinant");
  const tabData = [
    { name: "Determinant", comp: <Determinant /> },
    { name: "Inverse", comp: <Inverse /> },
    { name: "Cofactor", comp: <Cofactor /> },
    { name: "Adjoint", comp: <Adjoint /> },
    { name: "Transpose", comp: <Transpose /> },
    { name: "Matrix Product", comp: <MatrixProduct /> },
    { name: "Row Echelon Form", comp: <RowEchelon /> },
    { name: "Reduced Row Echelon Form", comp: <ReducedRowEchelon /> },
  ];

  return (
    <div className="tab-wrapper">
      <SideBar
        tabData={tabData}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="currentTab-wrapper">
        {tabData.find((tab) => tab.name === currentTab).comp}
      </div>
    </div>
  );
}

export default MatrixTab;
