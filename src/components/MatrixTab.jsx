import SideBar from "./SideBar";
import Determinant from "./Determinant";
import Inverse from "./Inverse";
import Cofactor from "./Cofactor";
import { useState } from "react";
import Adjoint from "./Adjoint";

function MatrixTab() {
  const [currentTab, setCurrentTab] = useState("Determinant");
  const tabData = [
    { name: "Determinant", comp: <Determinant /> },
    { name: "Inverse", comp: <Inverse /> },
    { name: "Cofactor", comp: <Cofactor /> },
    { name: "Adjoint", comp: <Adjoint /> },
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
