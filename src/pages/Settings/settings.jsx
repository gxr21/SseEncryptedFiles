import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";
import UserTable from "../../components/table/userTable";

function Settings(){
     
    return(
    <div className="settings  bg-[#051C2D] min-h-screen">
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">

        <div className="logo-container">
          <Logo />
        </div>

        <div className="searchbar-container  ">
          <Searchbar />
        </div>
      </div>
    <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={6} />
        </div>
       <div className="user-settings flex-1 p-6 gap-4">
       <UserTable
        title={"أعدادات المستخدم"}
        subtitle={"عرض اعدادات المستخدم"}

       />



       </div>

        
          
   
    
      
         

    



    
     </div>
    
    </div>
    );

}
export default Settings;