import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Table from "../../components/table/table.jsx";
import Logo from "../../components/logo/logo.jsx";
import "./dashboard.css";
import { data } from "autoprefixer";
import Folder from "../Folders/folder.jsx";
import { Link} from "react-router-dom";
function Dashboard() {
  const dashboardColumns = [
    { key: "name", label: "اسم الملف" },
    { key: "date", label: "تاريخ الرفع" },
      {
    key: "status",
    label: "الحالة",
    render: row => (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.statusColor}`}>
        {row.status}
      </span>
    ),
  },
  ];

const dashboardData = [
  {
    name: "ملف_1.pdf",
    date: "14/12/2024",
    status: "مرفوع",
    statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg"
  },
  {
    name: "ملف_2.pdf",
    date: "5/9/2024",
    status: " مكتمل",
    statusColor: "bg-green-900/40 text-green-300 border border-green-700 text-lg"
  },
  {
    name: "ملف_3.pdf",
    date: "16/2/2025",
    status: "قيد المراجعة",
    statusColor: "bg-yellow-900/40 text-yellow-300 border border-yellow-500 text-lg"
  },
  {
    name: "ملف_4.pdf",
    date: "20/4/2025",
    status: "مرفوع",
    statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg"
  },
    {
    name: "ملف_5.pdf",
    date: "12/8/2025",
    status: "قيد المراجعة",
    statusColor: "bg-yellow-900/40 text-yellow-300 border border-yellow-500 text-lg"
  },
];


  return (
    <div className="dashboard bg-[#051C2D] min-h-screen overflow-hidden">

      {/* Header */}
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400]">
          <Searchbar />
        </div>
      </div>

      {/* Content */}
      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={1} />
        </div>

        <div className="flex-1 p-6 gap-4">
          <Table
            title="قائمة الملفات "
            subtitle="عرض وتتبع جميع الملفات المرفوعة في النظام"
            columns={dashboardColumns}
            data={dashboardData}
          />
        </div>
      <button className="bt w-50 h-15 text-white rounded-xl bg-cyan-700 absolute top-215 left-230 hover:bg-cyan-600 text-xl">
      تفاصيل الملف
      </button>
      </div>
    </div>
  );
}

export default Dashboard;
