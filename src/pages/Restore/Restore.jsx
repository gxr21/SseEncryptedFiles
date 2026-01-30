import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";
import Table from "../../components/table/table.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

// ⚠️ تأكد أن هذه السطور موجودة هنا في بداية الملف
const API_BASE_URL = "http://localhost:3000/api/v1/files";
const API_TRASH_URL = `${API_BASE_URL}/trash`;
const API_RESTORE_URL = `${API_BASE_URL}/restore`;

function Restore() {
  const [deletedFiles, setDeletedFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState(null);

  // 1. جلب الملفات المحذوفة
  const fetchDeletedFiles = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get(API_TRASH_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // التعامل مع البيانات القادمة من الباك إند (سواء كانت مصفوفة مباشرة أو داخل كائن)
      const rawData = response.data.files || (Array.isArray(response.data) ? response.data : []);

      const mappedData = rawData.map((file) => ({
        id: file.fileId || file._id,
        name: file.name,
        date: new Date(file.updatedAt).toLocaleDateString("ar-EG"),
      }));

      setDeletedFiles(mappedData);
    } catch (error) {
      console.error("Error fetching trash:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeletedFiles();
  }, []);

  // 2. دالة الاسترجاع
  const handleRestore = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`${API_RESTORE_URL}/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setDeletedFiles((prev) => prev.filter((f) => f.id !== id));
      alert("تم استرجاع الملف بنجاح ✅");
    } catch (error) {
      alert("فشل الاسترجاع: " + (error.response?.data?.error || "خطأ غير معروف"));
    }
  };

  const dashboardColumns = [
    { key: "name", label: "اسم الملف" },
    { key: "date", label: "تاريخ الحذف" },
    {
      key: "actions",
      label: "إجراءات",
      render: (row) => (
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => handleRestore(row.id)}
            className="bg-[#2a5a8a] text-white px-4 py-1 rounded-lg hover:bg-sky-700 transition"
          >
            استرجاع ↺
          </button>
          <button
            onClick={() => {
              setSelectedFileId(row.id);
              setOpenDelete(true);
            }}
            className="bg-red-800 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition"
          >
            حذف نهائي 🗑️
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="Restore bg-[#051C2D] min-h-screen">
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400px]">
          <Searchbar />
        </div>
      </div>

      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={4} />
        </div>

        <div className="flex-1 p-6">
          {loading ? (
            <p className="text-white text-center mt-10">جاري التحميل...</p>
          ) : (
            <Table
              title="سلة المحذوفات"
              subtitle="استرجاع الملفات أو حذفها نهائياً"
              columns={dashboardColumns}
              data={deletedFiles}
            />
          )}
        </div>
      </div>

      {/* Popup الحذف النهائي */}
      {openDelete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0a2a42] p-8 rounded-xl text-center w-96 border border-[#2a5a8a] shadow-2xl">
            <p className="text-white text-xl mb-8">هل تريد حذف الملف نهائيًا؟</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpenDelete(false)}
                className="flex-1 bg-[#2a5a8a] text-white rounded-lg py-2"
              >
                إلغاء
              </button>
              <button
                onClick={async () => {
                   // أضف كود الحذف النهائي هنا باستخدام axios.delete
                   setOpenDelete(false);
                }}
                className="flex-1 bg-red-700 text-white rounded-lg py-2"
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