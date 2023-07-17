import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Determinant from "./components/Determinant";
import Inverse from "./components/Inverse";

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Determinant</Tab>
          <Tab>Inverse</Tab>
        </TabList>
        <TabPanel>
          <Determinant />
        </TabPanel>
        <TabPanel>
          <Inverse />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
