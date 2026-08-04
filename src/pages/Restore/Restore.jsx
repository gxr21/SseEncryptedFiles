import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";
import Table from "../../components/table/table.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config/api";

// الثوابت والروابط
const API_BASE_URL = apiUrl("/api/v1/files");
const API_TRASH_URL = `${API_BASE_URL}/trash`;
const API_RESTORE_URL = `${API_BASE_URL}/restore`;

function Restore() {
  const [deletedFiles, setDeletedFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState(null);
  // 1️⃣ جلب الملفات المحذوفة
  const fetchDeletedFiles = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get(API_TRASH_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // التعامل مع البيانات القادمة من الباك إند
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

  // 2️⃣ دالة الاسترجاع
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

  // 3️⃣ دالة الحذف النهائي (المحدثة)
  const handlePermanentDelete = async () => {
    if (!selectedFileId) return;
    
    try {
      const token = localStorage.getItem("token");
      
      // ✅ التعديل هنا: استدعاء رابط الحذف النهائي الجديد
      await axios.delete(`${API_BASE_URL}/${selectedFileId}/permanent`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // تحديث الواجهة وحذف الملف من المصفوفة
      setDeletedFiles((prev) => prev.filter((f) => f.id !== selectedFileId));
      setOpenDelete(false);
      alert("تم حذف الملف نهائياً من النظام 🗑️");
      
    } catch (error) {
      console.error("فشل الحذف:", error);
      alert("حدث خطأ أثناء الحذف: " + (error.response?.data?.error || "خطأ في السيرفر"));
      setOpenDelete(false);
    }
  };

  // إعداد أعمدة الجدول
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
      {/* الهيدر */}
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400px]">
          <Searchbar />
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="main-content flex rounded-2xl">
        {/* القائمة الجانبية */}
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={4} />
        </div>

        {/* الجدول */}
        <div className="flex-1 p-6">
          {loading ? (
            <p className="text-white text-center mt-10">جاري التحميل...</p>
          ) : deletedFiles.length > 0 ? (
            <Table
              title="سلة المحذوفات"
              subtitle="استرجاع الملفات أو حذفها نهائياً"
              columns={dashboardColumns}
              data={deletedFiles}
            />
          ) : (
            <div className="text-center mt-20 text-gray-400">
                <p className="text-xl">سلة المحذوفات فارغة </p>
            </div>
          )}
        </div>
      </div>

      {/* نافذة التأكيد (Popup) */}
      {openDelete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0a2a42] p-8 rounded-xl text-center w-96 border border-[#2a5a8a] shadow-2xl">
            <p className="text-white text-xl mb-8">هل أنت متأكد من حذف الملف نهائياً؟ لا يمكن التراجع عن هذا الإجراء.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpenDelete(false)}
                className="flex-1 bg-[#2a5a8a] text-white rounded-lg py-2 hover:bg-sky-700 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handlePermanentDelete}
                className="flex-1 bg-red-700 text-white rounded-lg py-2 hover:bg-red-600 transition"
              >
                حذف نهائي
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Restore;
