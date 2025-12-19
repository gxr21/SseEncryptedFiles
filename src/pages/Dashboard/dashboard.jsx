import Logo from "../../components/logo/logo.jsx";
import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Red from "../../components/Buttons/colors/Red.jsx";
import Blue from "../../components/Buttons/colors/Blue.jsx";
import Green from "../../components/Buttons/colors/green.jsx";
import "./dashboard.css";
function Dashboard(){
    return (
    <>
     <div className="dashboard">
        
        <Searchbar/>
        
       
         <List/>
        
       
        
        
      </div>
    </>
    );
}
export default Dashboard;