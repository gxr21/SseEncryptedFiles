import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/search bar/searchbar.jsx";
import List from "../../components/List/list.jsx";
import Table from "../../components/table/table.jsx";
import Logo from "../../components/logo/logo.jsx";
import "./dashboard.css";
import { apiUrl } from "../../config/api";

const API_USER_FILES = apiUrl("/api/v1/files");

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // دالة البحث
  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
    
    if (!searchQuery.trim()) {
      setFilteredFiles(files); // عرض جميع الملفات إذا كان البحث فارغاً
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = files.filter(file => 
      file.name?.toLowerCase().includes(query) ||
      (file.type && file.type.toLowerCase().includes(query)) ||
      (file.date && file.date.toLowerCase().includes(query))
    );
    
    setFilteredFiles(results);
  };

  // دالة لتحميل الملف مع إرسال التوكن
  const handleDownload = async (fileId, fileName) => {
    try {
      const storedToken = localStorage.getItem("token");
      
      const response = await axios.get(`${API_USER_FILES}/download/${fileId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName || 'file');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error(err);
      alert("فشل التحميل: ربما الملف غير موجود أو التوكن منتهي الصلاحية");
    }
  };

  // دالة الحذف
  const handleDelete = async (fileId) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الملف؟")) return;

    try {
      const storedToken = localStorage.getItem("token");
      
      await axios.delete(`${API_USER_FILES}/${fileId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      // تحديث الواجهة
      setFiles(prevFiles => prevFiles.filter((file) => file.id !== fileId));
      setFilteredFiles(prevFiles => prevFiles.filter((file) => file.id !== fileId));
      
    } catch (err) {
      alert("فشل الحذف: " + (err.response?.data?.message || "خطأ غير معروف"));
    }
  };

  // تعريف الأعمدة
  const dashboardColumns = [
    { key: "name", label: "اسم الملف" },
    { key: "date", label: "تاريخ الرفع" },
    { key: "size", label: "الحجم" },
    {
      key: "status",
      label: "الحالة",
      render: (row) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.statusColor}`}>
          {row.status}
        </span>
      ),
    },
    {
      key: "delete",
      label: "إجراءات",
      render: (row) => (
        <div className="flex gap-2 justify-end">
           <button 
             onClick={() => handleDownload(row.id, row.name)}
             className="bg-cyan-700 px-3 py-1 rounded-full text-sm font-medium text-white hover:bg-cyan-600 flex items-center gap-1"
             title="تحميل آمن"
           >
             تنزيل ⬇️
           </button>

           <button 
             onClick={() => handleDelete(row.id)}
             className="bg-rose-900/60 border border-rose-600 text-rose-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-rose-700 hover:text-white transition"
           >
             حذف 🗑️
           </button>
        </div>
      ),
    },
  ];

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
      name: "صورة_شخصية.jpg",
      date: "15/12/2024",
      size: "2.3 MB",
      status: "محمي 🔒",
      statusColor: "bg-green-900/40 text-green-300 border border-green-700 text-lg",
    },
    {
      id: "mock3",
      name: "تقارير_سنوية.docx",
      date: "16/12/2024",
      size: "850 KB",
      status: "عام 🔓",
      statusColor: "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg",
    },
  ];

  useEffect(() => {
    const fetchFiles = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setError("يرجى تسجيل الدخول اولا لعرض ملفاتك");
        setLoading(false);
        return;
      }

      setToken(storedToken);
      
      try {
        setLoading(true);
        const response = await axios.get(API_USER_FILES, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        // معالجة البيانات
        const mappedData = response.data.map((file) => {
          // حساب الحجم بشكل ديناميكي
          const sizeInKB = file.size / 1024;
          const sizeInMB = sizeInKB / 1024;
          const displaySize = sizeInMB >= 1 
            ? `${sizeInMB.toFixed(1)} MB` 
            : `${sizeInKB.toFixed(1)} KB`;

          return {
            id: file.fileId || file._id,
            name: file.name || file.originalName || "ملف بدون اسم",
            date: new Date(file.createdAt).toLocaleDateString("ar-EG"),
            size: displaySize,
            status: file.encrypted ? "محمي 🔒" : "عام 🔓",
            statusColor: file.encrypted
              ? "bg-green-900/40 text-green-300 border border-green-700 text-lg"
              : "bg-blue-900/40 text-blue-300 border border-blue-700 text-lg",
            type: file.mimetype || file.type || "غير معروف"
          };
        });

        setFiles(mappedData);
        setFilteredFiles(mappedData);
        setIsOffline(false);
        setError("");
        
      } catch (err) {
        console.warn("⚠️ السيرفر غير متصل");
        setFiles(MOCK_DATA);
        setFilteredFiles(MOCK_DATA);
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
          {/* Searchbar مع دالة البحث */}
          <Searchbar 
            onSearch={handleSearch}
            placeholder="ابحث عن ملفاتك..."
          />
        </div>
      </div>

      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={1} />
        </div>

        <div className="flex-1 p-6 gap-4 relative">
          
          {error && !isOffline && (
             <div className="bg-red-900/50 border border-red-600 text-red-200 p-3 rounded-lg mb-4 text-center">
               ⛔ {error}
             </div>
          )}

          {isOffline && (
            <div className="bg-yellow-900/50 border border-yellow-600 text-yellow-200 p-3 rounded-lg mb-4 text-center">
              ⚠️ تعذر الاتصال بالسيرفر – يتم عرض بيانات افتراضية
            </div>
          )}

          {/* عرض نتائج البحث */}
          {searchTerm && (
            <div className="mb-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-cyan-300">
                  🔍 نتائج البحث عن: "<span className="font-bold">{searchTerm}</span>"
                </span>
                <span className="text-sm text-gray-400">
                  {filteredFiles.length} ملف
                </span>
              </div>
            </div>
          )}

          {loading ? (
            <p className="text-white text-center mt-10">جاري التحميل...</p>
          ) : (
            <>
              <Table
                title={searchTerm ? `نتائج البحث: ${searchTerm}` : (isOffline ? "قائمة الملفات (تجريبي)" : "قائمة الملفات")}
                subtitle={searchTerm ? `عُثر على ${filteredFiles.length} ملف` : (isOffline ? "وضع المعاينة" : "عرض وتتبع جميع الملفات المرفوعة")}
                columns={dashboardColumns}
                data={filteredFiles}
              />
              
              {/* إذا لم توجد نتائج */}
              {searchTerm && filteredFiles.length === 0 && (
                <div className="text-center mt-8 p-8 border border-dashed border-gray-700 rounded-lg">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-gray-400 text-lg mb-2">لم يتم العثور على ملفات تطابق بحثك</p>
                  <p className="text-gray-500 text-sm">جرب كلمات بحث أخرى أو تحقق من التهجئة</p>
                  <button 
                    onClick={() => handleSearch("")}
                    className="mt-4 bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg text-sm"
                  >
                    عرض جميع الملفات
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
