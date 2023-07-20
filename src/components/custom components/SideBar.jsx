import "./SideBar.css";

function SideBar({ tabData, currentTab, setCurrentTab }) {
  const closeSideBar = () => {
    const bodyEl = document.body;
    const sideBarEl = document.querySelector(".sidebar-wrapper");
    if (bodyEl.clientWidth < 720) {
      sideBarEl.classList.remove("show-sidebar");
    }
  };

  const renderLinks = tabData.map((data, indx) => (
    <div
      onClick={() => {
        closeSideBar();
        setCurrentTab(data.name);
      }}
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
