import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "../../components/logo/logo.jsx";
import Searchbar from "../../components/search bar/searchbar.jsx";
import Table from "../../components/table/table.jsx";
import List from "../../components/List/list.jsx";
import Btn from "../../components/Buttons/colors/Red.jsx";
import { apiUrl } from "../../config/api";

const API_BASE_URL = apiUrl("/api/v1/folders");

function Folder() {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState("");

  // جلب المجلدات
  const fetchFolders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if(!token) {
         setError("يرجى تسجيل الدخول");
         setLoading(false);
         return;
      }

      const response = await axios.get(API_BASE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Response Data:", response.data); 

      const rawFolders = response.data.folders || (Array.isArray(response.data) ? response.data : []);

      const mappedData = rawFolders.map(folder => ({
        id: folder.folderId || folder._id || folder.id, 
        name: folder.name,
        description: "مجلد",
        date: new Date(folder.createdAt).toLocaleDateString("ar-EG"),
      }));

      setFolders(mappedData);
      setOffline(false);
    } catch (error) {
      console.warn("⚠️ خطأ في الاتصال:", error);
      setFolders([
        { id: '1', name: "مستندات (تجريبي)", description: "local", date: "14/12/2024" },
      ]);
      setOffline(true);
    } finally {
      setLoading(false);
    }
  };

  // جلب الملفات داخل مجلد - الرابط الصحيح ✅
 const fetchFilesInFolder = async (folderId) => {
    try {
      setLoading(true);
      setFiles([]); // تنظيف القائمة القديمة
      const token = localStorage.getItem("token");

      // ✅ الطلب يذهب للمجلد المحدد
      const response = await axios.get(`${API_BASE_URL}/${folderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("محتوى المجلد المستلم:", response.data);

      // ✅ الوصول للملفات داخل الكائن المستلم (حسب الـ UseCase اللي عندك)
      const rawFiles = response.data.files || [];

      const mappedFiles = rawFiles.map(file => ({
        id: file.fileId || file._id,
        name: file.name,
        type: file.mimeType || "file", // تأكد من اسم الحقل mimeType
        size: formatFileSize(file.size),
        date: new Date(file.createdAt).toLocaleDateString("ar-EG"),
      }));

      setFiles(mappedFiles);
      setSelectedFolder({
        id: folderId,
        name: response.data.currentFolderName || "المجلد"
      });
      setOffline(false);
    } catch (error) {
      console.error("خطأ في جلب الملفات:", error);
      setError("فشل في تحميل محتويات المجلد");
    } finally {
      setLoading(false);
    }
  };

  // العودة إلى قائمة المجلدات
  const handleBackToFolders = () => {
    setSelectedFolder(null);
    setFiles([]);
  };

  // إنشاء مجلد جديد
  const handleCreateFolder = async () => {
    const folderName = prompt("أدخل اسم المجلد الجديد:");
    if (!folderName) return;

    try {
      const token = localStorage.getItem("token");
      await axios.post(API_BASE_URL, { name: folderName }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFolders();
    } catch (err) {
      alert("فشل إنشاء المجلد: " + (err.response?.data?.error || err.message));
    }
  };

  // حذف مجلد
  const handleDeleteFolder = async (folderId) => {
    if(!folderId) {
        alert("خطأ: معرف المجلد غير موجود");
        return;
    }

    if (!window.confirm("هل أنت متأكد من حذف هذا المجلد؟")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/${folderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setFolders(prev => prev.filter(f => f.id !== folderId));
      
      if (selectedFolder?.id === folderId) {
        handleBackToFolders();
      }
      
    } catch (err) {
      console.error(err);
      alert("فشل الحذف: " + (err.response?.data?.error || "خطأ غير معروف"));
    }
  };

  // تنسيق حجم الملف
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  // تعريف أعمدة المجلدات
  const folderColumns = [
    {
      key: "name",
      label: "اسم المجلد",
      render: (row) => (
        <div 
          className="flex flex-col text-right cursor-pointer hover:bg-gray-800 p-2 rounded"
          onClick={() => fetchFilesInFolder(row.id)}
        >
          <span className="text-white font-medium flex items-center gap-2">
             📁 {row.name}
          </span>
          <span className="text-sm text-gray-400">
            {row.description}
          </span>
        </div>
      )
    },
    {
        key: "date",
        label: "تاريخ الإنشاء",
    },
    {
        key: "actions",
        label: "إجراءات",
        render: (row) => (
            <div className="flex gap-2">
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        fetchFilesInFolder(row.id);
                    }}
                    className="bg-green-900/50 text-green-200 border border-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-700 hover:text-white transition"
                >
                    فتح 👁️
                </button>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFolder(row.id);
                    }}
                    className="bg-red-900/50 text-red-200 border border-red-600 px-3 py-1 rounded-full text-sm hover:bg-red-700 hover:text-white transition"
                >
                    حذف 🗑️
                </button>
            </div>
        )
    }
  ];

  // تعريف أعمدة الملفات
  const fileColumns = [
    {
      key: "name",
      label: "اسم الملف",
      render: (row) => (
        <div className="flex flex-col text-right">
          <span className="text-white font-medium flex items-center gap-2">
            {row.type.includes('pdf') ? '📄' : 
             row.type.includes('image') ? '🖼️' : 
             row.type.includes('word') ? '📝' : '📎'} {row.name}
          </span>
          <span className="text-sm text-gray-400">
            {row.type}
          </span>
        </div>
      )
    },
    {
      key: "size",
      label: "الحجم",
    },
    {
      key: "date",
      label: "تاريخ الرفع",
    },
    // {
    //   key: "actions",
    //   label: "إجراءات",
    //   render: (row) => (
    //     <div className="flex gap-2">
    //       <button 
    //         onClick={() => row.downloadUrl && window.open(row.downloadUrl, '_blank')}
    //         className="bg-blue-900/50 text-blue-200 border border-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-700 hover:text-white transition"
    //       >
    //         تحميل ⬇️
    //       </button>
    //     </div>
    //   )
    // }
  ];

  return (
    <div className="folder bg-[#051C2D] min-h-screen overflow-hidden">
      
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400px]">
          <Searchbar />
        </div>
      </div>

      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={2} />
        </div>

        <div className="flex-1 p-6 gap-4 relative">
            
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center gap-4">
              {selectedFolder && (
                <button 
                  onClick={handleBackToFolders}
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  ↩️ العودة للمجلدات
                </button>
              )}
              <h2 className="text-2xl text-white font-bold">
              </h2>
            </div>
            
            <div className="flex gap-4">
              {!selectedFolder && (
                <div onClick={handleCreateFolder}>
                  <Btn
                    text="اضافة مجلد ➕"
                    color="bg-sky-800"
                    hover="hover:bg-sky-600"
                  />
                </div>
              )}
            </div>
          </div>

          {offline && (
            <div className="bg-yellow-900/50 border border-yellow-600 text-yellow-200 p-3 rounded-lg text-center mb-4">
              ⚠️ تعذر الاتصال بالسيرفر - يتم عرض بيانات افتراضية
            </div>
          )}
          
          {error && (
             <div className="bg-red-900/50 text-red-200 p-3 rounded-lg text-center mb-4">
               {error}
             </div>
          )}

          {loading ? (
            <p className="text-white text-center mt-10 text-xl">جاري التحميل...</p>
          ) : selectedFolder ? (
            <div className="flex-1">
              <Table
                title={`الملفات في: ${selectedFolder.name}`}
                subtitle={`إجمالي الملفات: ${files.length}`}
                columns={fileColumns}
                data={files}
              />
              
              {files.length === 0 && !loading && (
                <div className="text-center mt-8 p-8 border border-dashed border-gray-700 rounded-lg">
                  <p className="text-gray-400 text-lg">لا توجد ملفات في هذا المجلد</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1">
              <Table
                title="قائمة المجلدات"
                subtitle="انقر على المجلد لعرض الملفات الموجودة داخله"
                columns={folderColumns}
                data={folders}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Folder;
