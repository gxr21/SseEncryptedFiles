import Logo from "../../components/logo/logo.jsx";
import Searchbar from "../../components/search bar/searchbar.jsx";
import Table from "../../components/table/table.jsx";
import List from "../../components/List/list.jsx";
import Btn from "../../components/Buttons/colors/Red.jsx";

function Folder() {
    const dashboardColumns = [
    {
  key: "name",
  label: "اسم المجلد",
  render: (row) => (
    <div className="flex flex-col text-right">
      <span className="text-white font-medium">
        {row.name}
      </span>
      <span className="text-sm text-gray-400">
        {row.description}
      </span>
    </div>
  )
},

    { key: "date", label: "تاريخ الانشاء" },
      {
    key: "status",
    label: "عرض المجلد",
    render: row => (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.statusColor}`}>
        {row.status}
      </span>
    ),
  },
  ];

const dashboardData = [
  {
    name: "مستندات",
    description:"570.3kb",
    date: "14/12/2024",
    status: "مرفوع",
    statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg"
  },
  {
    name: "python",
    description:"170.3mb",
    date: "7/9/2024",
    status: " مكتمل",
    statusColor: "bg-green-900/40 text-green-300 border border-green-700 text-lg"
  },
  {
    name: "ملفات اكسل",
    description:"80.3mb",
    date: "6/2/2025",
    status: "قيد المراجعة",
    statusColor: "bg-yellow-900/40 text-yellow-300 border border-yellow-500 text-lg"
  },
  {
    name: "بيانات الادارة",
    description:"70.34kb",
    date: "27/4/2025",
    status: "مرفوع",
    statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg"
  },
    {
    name: "قسم المحاسبة",
    description:"590.3kb",
    date: "6/9/2025",
    status: "قيد المراجعة",
    statusColor: "bg-yellow-900/40 text-yellow-300 border border-yellow-500 text-lg"
  },
];

    return(
        <div className="folder bg-[#051C2D] min-h-screen overflow-hidden ">
 
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
          <List activeId={2} />
        </div>

        <div className="flex-1 p-6">
          <Table
            title="قائمة المجلدات "
            subtitle="عرض وتتبع جميع المجلدات المرفوعة في النظام"
            columns={dashboardColumns}
            data={dashboardData}
          />
         <div className="relative min-h-[400px]"> {/* الحاوية */}
              <div className="absolute bottom-147 left-180 flex gap-4">
                <Btn
                  text="اضافة مجلد"
                  color="bg-sky-800"
                  hover="hover:bg-sky-600"
                />
                <Btn
                  text="حذف مجلد"
                  color="bg-red-800"
                  hover="hover:bg-red-600"
                />
              </div>
            </div>
      </div>
        
        
        
     
    </div>
        
    </div>
    
    
    );
}
export default Folder;