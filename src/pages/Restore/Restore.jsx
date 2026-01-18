import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";
import Table from "../../components/table/table.jsx";
import Btn from "../../components/Buttons/colors/Red.jsx";
import { useState } from "react";
function Restore() {
    const [openDelete,setOpenDelete]=useState(false);

    const dashboardColumns = [
    { key: "name", label: "اسم الملف" },
    { key: "date", label: "تاريخ الحذف" },
    ];

const dashboardData = [
  {
    name: "ملف_1.pdf",
    date: "15/1/2024",
  },
  {
    name: "ملف_2.pdf",
    date: "7/4/2024",

  },
  {
    name: "ملف_3.pdf",
    date: "16/6/2025",
  },
  {
    name: "ملف_4.pdf",
    date: "3/10/2025",

  },
    {
    name: "ملف_5.pdf",
    date: "12/9/2025",
  },
];

    return(
     <div className="Restore bg-[#051C2D] min-h-screen ">
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
          <List activeId={4} />
        </div>

        <div className="flex-1 p-6 gap-4">
          <Table
            title="قائمة أسترجاع الملفات "
            subtitle="عرض  جميع الملفات المحذوفة في النظام"
            columns={dashboardColumns}
            data={dashboardData}
          />
         <div className="relative min-h-[400px]"> {/* الحاوية */}
              <div className="absolute bottom-162 left-180 flex gap-4">
                <Btn
                  text="أسترجاع "
                  color="bg-[#2a5a8a]"
                  hover="hover:bg-sky-700"
                />
                <Btn
                  text="حذف نهائي"
                  color="bg-red-800"
                  hover="hover:bg-red-700"
                  onClick={()=> setOpenDelete(true)}
                />
              </div>
            </div>          
        </div>
      
      </div>    
    {/*popup*/}
{openDelete && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-[#0a2a42] p-6 rounded-xl text-center w-96 h-64 flex flex-col justify-between inset-shadow-sm shadow-white  ">
      
      
      <p className="text-white text-2xl font-semibold relative top-5">
        هل تريد حذف الملف نهائيًا؟
      </p>

      
      <div className="flex justify-center gap-6">
        <button
          onClick={() => setOpenDelete(false)}
          className="flex-1 bg-[#2a5a8a] text-white rounded-lg py-3 text-lg"
        >
          إلغاء
        </button>

        <button
          onClick={() => {
            console.log("تم الحذف النهائي");
            setOpenDelete(false);
          }}
          className="flex-1 bg-red-700 text-white rounded-lg py-3 text-lg"
        >
          حذف
        </button>
      </div>
    </div>
  </div>
)}


     </div>
    );
}

export default Restore;