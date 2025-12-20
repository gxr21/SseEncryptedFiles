import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import "./dashboard.css";
function Dashboard(){
    return (
    <>
     <div className="dashboard bg-[#051C2D] h-screen  ">
        <Searchbar/>    
         <List/>     
      </div>
    </>
    );
}
export default Dashboard;