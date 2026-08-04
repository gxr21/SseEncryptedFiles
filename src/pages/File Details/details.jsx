import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../config/api";

// تأكد أن الرابط يطابق الباك إند الخاص بك
const API_URL = apiUrl("/api/v1/files"); 

function Details() {
  const { id } = useParams(); // 1. استلام الـ ID من الرابط
  const navigate = useNavigate();
  
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 2. جلب تفاصيل الملف عند فتح الصفحة
  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        // نفترض أن الباك إند يدعم جلب ملف واحد عبر /file/:id
        // إذا لم يكن يدعم، يمكنك جلب الكل والبحث بداخلهم (حل مؤقت)
        const response = await axios.get(`${API_URL}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // تنسيق البيانات
        setFile(response.data);
      } catch (err) {
        console.error(err);
        setError("لم يتم العثور على تفاصيل الملف أو حدث خطأ في الاتصال");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchFileDetails();
  }, [id]);

  // 3. دالة حذف الملف
  const handleDelete = async () => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الملف نهائياً؟")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      alert("تم الحذف بنجاح");
      navigate("/dashboard"); // الرجوع للداشبورد بعد الحذف
    } catch (err) {
      alert("فشل الحذف: " + (err.response?.data?.message || err.message));
    }
  };

  // دالة مساعدة لتنسيق الحجم
  const formatSize = (bytes) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // --- واجهة التحميل ---
  if (loading) return <div className="bg-[#051C2D] min-h-screen flex items-center justify-center text-white text-2xl">جاري التحميل...</div>;
  
  // --- واجهة الخطأ ---
  if (error) return <div className="bg-[#051C2D] min-h-screen flex flex-col items-center justify-center text-red-400 gap-4">
    <h2 className="text-2xl">{error}</h2>
    <button onClick={() => navigate(-1)} className="bg-blue-600 text-white px-6 py-2 rounded-lg">رجوع</button>
  </div>;

  return (
    <div className="bg-[#051C2D] min-h-screen flex items-center justify-center">
      <div className="bg-[#082841] w-[900px] h-[450px] rounded-2xl p-8 flex gap-10 shadow-2xl border border-[#0e4066]">
        
        {/* القسم الأيمن: التفاصيل النصية */}
        <div className="flex-1 text-right flex flex-col gap-6 justify-center">
          <DetailRow label="اسم الملف" value={file.name || file.filename} />
          <DetailRow label="حجم الملف" value={formatSize(file.size)} />
          <DetailRow label="نوع الملف" value={file.mimetype || file.type || "غير معروف"} />
          <DetailRow label="تاريخ الرفع" value={new Date(file.createdAt).toLocaleDateString('ar-EG')} />
          
          <div className="flex justify-end items-center gap-4">
             <span className={`text-xl font-bold ${file.encrypted ? "text-green-400" : "text-yellow-400"}`}>
               {file.encrypted ? "محمي ومشفر 🔒" : "ملف عام 🔓"}
             </span>
             <p className="text-gray-400 text-2xl">: حالة التشفير</p>
          </div>
        </div>

        {/* خط فاصل */}
        <div className="w-px bg-gray-600 opacity-50"></div>

        {/* القسم الأيسر: الصورة والعمليات */}
        <div className="flex flex-col items-center justify-center gap-6 w-1/3">
          <div className="bg-[#0e4066] w-[160px] h-[160px] rounded-2xl flex items-center justify-center shadow-inner">
            <span className="text-6xl">
              {/* أيقونة بسيطة حسب النوع */}
              {file.mimetype?.includes("image") ? "🖼️" : file.mimetype?.includes("pdf") ? "📄" : "📁"}
            </span>
          </div>
          
          <h3 className="text-white text-lg font-bold truncate max-w-[200px]" title={file.name}>
            {file.name}
          </h3>

          <div className="flex flex-col gap-3 w-full">
            <a 
              href={file.url} // أو رابط التحميل الخاص بك
              target="_blank"
              rel="noreferrer"
              className="w-full h-[50px] rounded-xl bg-cyan-700 text-white font-bold hover:bg-cyan-600 transition flex items-center justify-center text-lg"
            >
              تحميل الملف ⬇️
            </a>

            <button 
              onClick={handleDelete}
              className="w-full h-[50px] rounded-xl bg-red-900/80 text-red-200 border border-red-700 font-bold hover:bg-red-700 hover:text-white transition"
            >
              حذف الملف 🗑️
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// مكون صغير لترتيب النصوص (Label : Value)
const DetailRow = ({ label, value }) => (
  <div className="flex justify-end items-center gap-4 border-b border-[#0e4066] pb-2">
    <p className="text-white text-xl truncate max-w-[300px]" title={value}>{value}</p>
    <p className="text-gray-400 text-2xl whitespace-nowrap">: {label}</p>
  </div>
);

export default Details;
