import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Table from "../../components/table/table.jsx";
import Logo from "../../components/logo/logo.jsx";
import "./dashboard.css";

function Dashboard() {
  const MOCK_DATA = [
    {
      id: "mock1",
      name: "ملف_تجريبي_1.pdf",
      date: "14/12/2024",
      size: "1.5 MB",
      status: "مرفوع",
      statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg",
    },
    {
      id: "mock2",
      name: "ملف_تجريبي_2.docx",
      date: "5/9/2024",
      size: "500 KB",
      status: "مكتمل",
      statusColor: "bg-green-900/40 text-green-300 border border-green-700 text-lg",
    },
    {
      id: "mock3",
      name: "تقرير_السيرفر_مغلق.pdf",
      date: "16/2/2025",
      size: "2.1 MB",
      status: "فشل الاتصال",
      statusColor: "bg-red-900/40 text-red-300 border border-red-500 text-lg",
    },
  ];

  const dashboardColumns = [
    { key: "name", label: "اسم الملف" },
    { key: "date", label: "تاريخ الرفع" },
    { key: "size", label: "الحجم" },
    {
      key: "status",
      label: "الحالة",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${row.statusColor}`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/file", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const mappedData = response.data.map((file) => ({
          id: file.fileId,
          name: file.name,
          date: new Date(file.createdAt).toLocaleDateString("ar-EG"),
          size: (file.size / 1024).toFixed(1) + " KB",
          status: file.encrypted ? "محمي 🔒" : "عام 🔓",
          statusColor: file.encrypted
            ? "bg-green-900/40 text-green-300 border border-green-700 text-lg"
            : "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg",
        }));

        setFiles(mappedData);
        setIsOffline(false);
      } catch (err) {
        console.warn("⚠️ السيرفر غير متصل، تم تحميل البيانات الافتراضية");
        setFiles(MOCK_DATA);
        setIsOffline(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="dashboard bg-[#051C2D] min-h-screen overflow-hidden">
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400px]">
          <Searchbar />
        </div>
      </div>

      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={1} />
        </div>

        <div className="flex-1 p-6 gap-4 relative">
          {isOffline && (
            <div className="bg-yellow-900/50 border border-yellow-600 text-yellow-200 p-3 rounded-lg mb-4 text-center">
              ⚠️ تعذر الاتصال بالسيرفر – يتم عرض بيانات افتراضية
            </div>
          )}

          {loading ? (
            <p className="text-white text-center mt-10">جاري التحميل...</p>
          ) : (
            <Table
              title={isOffline ? "قائمة الملفات (تجريبي)" : "قائمة الملفات"}
              subtitle={
                isOffline
                  ? "وضع المعاينة - السيرفر غير متصل"
                  : "عرض وتتبع جميع الملفات المرفوعة"
              }
              columns={dashboardColumns}
              data={files}
            />
          )}

          <button className="bt w-50 h-15 text-white rounded-xl bg-cyan-700 absolute top-195 left-180 hover:bg-cyan-600 text-xl">
            <Link to="/details">تفاصيل الملف</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
