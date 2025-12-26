import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Logo from "../../components/logo/logo.jsx";
import Table from "../../components/table/table.jsx";
import "./dashboard.css";
function Dashboard(){
    return (
    <>
     <div className="dashboard bg-[#051C2D] h-screen  ">
        <Searchbar/>    
         <List/>     
         <Logo/>
         <Table/>
      </div>
    </>
    );
}
export default Dashboard;