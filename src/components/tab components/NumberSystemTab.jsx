import { useState } from "react";
import SideBar from "../custom components/SideBar.jsx";
import Binary from "../num system components/Binary.jsx";
import Decimal from "../num system components/Decimal.jsx";
import Octal from "../num system components/Octal.jsx";
import Hexa from "../num system components/Hexa.jsx";

function NumberSystemTab() {
  const [currentTab, setCurrentTab] = useState("Base-2 to Base-8/10/16");
  const tabData = [
    { name: "Base-2 to Base-8/10/16", comp: <Binary /> },
    { name: "Base-8 to Base-2/10/16", comp: <Octal /> },
    { name: "Base-10 to Base-2/8/16", comp: <Decimal /> },
    { name: "Base-16 to Base-2/8/10", comp: <Hexa /> },
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

export default NumberSystemTab;
