import "./SideBar.css";

function SideBar({ tabData, currentTab, setCurrentTab }) {
  const renderLinks = tabData.map((data, indx) => (
    <div
      onClick={() => setCurrentTab(data.name)}
      style={{
        backgroundColor: data.name === currentTab ? "rgb(93, 23, 222)" : "",
      }}
      key={indx}
    >
      {data.name}
    </div>
  ));
  return <nav className="sidebar-wrapper">{renderLinks}</nav>;
}

export default SideBar;
