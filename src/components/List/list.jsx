import './list.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function List({ activeId }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // لاحقا 
  // const [storageUsed, setStorageUsed] = useState(0);
  const [loading, setLoading] = useState(true);

  // جلب بيانات المستخدم
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      // جلب بيانات المستخدم
      const userResponse = await axios.get("https://sseencryptedfiles-backend.onrender.com/api/v1/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(userResponse.data);

      // جلب الملفات لحساب التخزين
      // لاحقا يتم تفعيلها
      // const filesResponse = await axios.get("http://localhost:3000/api/v1/files", {
      //   headers: { Authorization: `Bearer ${token}` }
      // });

      // const files = filesResponse.data.files || filesResponse.data || [];
      // const totalSize = files.reduce((sum, file) => sum + (file.size || 0), 0);
      
      // setStorageUsed(totalSize);
    } catch (error) {
      console.warn("⚠️ خطأ في جلب البيانات:", error);
      // بيانات افتراضية عند الخطأ
      setUser({ name: "المستخدم", email: "user@example.com" });
      // setStorageUsed(4.2 * 1024 * 1024 * 1024); // 4.2 جيجابايت
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };

  const mainMenu = [
    { id: 1, name: 'أستعراض الملفات', icon: '📁', path: '/dashboard' },
    { id: 2, name: 'استرجاع الملفات', icon: '↩️', path: '/restore' },
    { id: 3, name: 'رفع الملفات', icon: '⬆️', path: '/upload' },   
  ];

  const isActive = (id) => id === activeId;

  const itemClass = (active) =>
    `w-full text-right px-4 py-3.5 rounded-xl
     flex items-center justify-between
     transition-all duration-300 transform
     hover:translate-x-[-4px]
     ${
       active
         ? 'bg-gradient-to-r from-[#20C997] to-[#1aa67e] text-white shadow-lg'
         : 'text-gray-300 hover:bg-[#1a3a5a] hover:text-white'
     }`;
//  لاحقا يتم تفعيلها
  // تحويل البايت إلى جيجابايت
  // const bytesToGB = (bytes) => {
  //   return (bytes / (1024 * 1024 * 1024)).toFixed(1);
  // };

  // // حساب النسبة المئوية (افتراض 10 جيجا حد أقصى)
  // const getPercentage = () => {
  //   const totalGB = 10; // 10 جيجابايت افتراضياً
  //   const usedGB = bytesToGB(storageUsed);
  //   return Math.min((usedGB / totalGB) * 100, 100);
  // };
  
//  ======== القائمة ========
  return (
    <div className="list-container h-full flex flex-col bg-gradient-to-b from-[#0a2538] to-[#051C2D]">

      {/* User Profile */}
      <div className="p-6 flex flex-col items-center border-b border-[#1a3a5a]">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 animate-pulse mb-4"></div>
            <div className="h-6 w-32 bg-gray-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-40 bg-gray-800 rounded animate-pulse"></div>
          </div>
        ) : (
          <>
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-600 to-blue-800 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
            </div>
            <p className="font-bold text-white text-xl mb-1">
              {user?.name || "المستخدم"}
            </p>
            <p className="text-gray-400 text-sm text-center">
              {user?.email || "user@example.com"}
            </p>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h3 className="text-gray-400 text-sm font-semibold mb-3 px-2">
          القائمة الرئيسية
        </h3>

        <ul className="space-y-3 mb-6">
          {mainMenu.map((item) => (
            <li key={item.id} className="group">
              <Link to={item.path} className={itemClass(isActive(item.id))}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className={`w-1.5 h-1.5 rounded-full ${isActive(item.id) ? 'bg-white' : 'bg-transparent'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-gray-400 text-sm font-semibold mb-3 px-2">
          الإعدادات
        </h3>

        <ul className="space-y-2">
          <li>
            <Link to="/settings" className={itemClass(isActive(6))}>
              <div className="flex items-center gap-3">
                <span>⚙️</span>
                <span>الإعدادات</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom - حالة التخزين تفعيله لاحقا*/}
      <div className="p-4 border-t border-[#1a3a5a] bg-[#0a2538]/50">
        {/* <div className="mb-4 p-3 bg-[#1a3a5a]/30 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">التخزين</span>
            {loading ? (
              <span className="text-sm text-gray-500">جاري التحميل...</span>
            ) : (
              <span className="text-sm font-medium text-[#20C997]">
                {bytesToGB(storageUsed)} جيجا / 10 جيجا
              </span>
            )}
          </div>
          
          <div className="w-full h-2 bg-[#1a3a5a] rounded-full overflow-hidden">
            {loading ? (
              <div className="h-full bg-gray-700 animate-pulse"></div>
            ) : (
              <div 
                className="h-full bg-gradient-to-r from-[#20C997] to-[#0ea5e9] transition-all duration-500"
                style={{ width: `${getPercentage()}%` }}
              />
            )}
          </div>
          
          <div className="text-xs text-gray-500 mt-2 text-center">
            {loading ? '...' : `${getPercentage().toFixed(1)}% مستخدم`}
          </div>
        </div> */}
      {/* تسجيل الخروج */}
        <button
          onClick={handleLogout}
          className="w-full py-3.5 px-4 rounded-xl
            flex items-center justify-center gap-3
            text-red-300 bg-gradient-to-r from-red-900/20 to-red-800/10
            hover:text-red-200 transition-all duration-300
            border border-red-800/30 hover:border-red-700/50"
        >
          <span className="text-lg">🚪</span>
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  );
}

export default List;