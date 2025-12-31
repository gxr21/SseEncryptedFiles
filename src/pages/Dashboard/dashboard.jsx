import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Table from "../../components/table/table.jsx";
import Logo from "../../components/logo/logo.jsx";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard bg-[#051C2D] min-h-screen overflow-hidden" >
      {/* Header Section */}
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="searchbar-container w-[400px]">
          <Searchbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex rounded-2xl">
        {/* Sidebar (List) */}
        <div className="sidebar-container w-64 min-w-[256px] border-r border-[#0a2a42]" >
          <List />
        </div>

        {/* Main Area (Table) */}
        <div className="main-area flex-1 p-6">
          <div className="table-container">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;