import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";

function Settings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/api/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (err) {
      console.error("خطأ في جلب البيانات:", err);
      setError("فشل في تحميل بيانات المستخدم");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="settings bg-[#051C2D] min-h-screen">
      {/* Header */}
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <Logo />
        <div className="w-[400px]">
          <Searchbar />
        </div>
      </div>

      <div className="main-content flex rounded-2xl">
        {/* Sidebar */}
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={6} />
        </div>

        {/* User Content */}
        <div className="user-settings flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* العنوان */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">
                معلومات الحساب
              </h1>
              <p className="text-gray-400">
                بيانات حسابك الشخصي على المنصة
              </p>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
                <p className="text-white text-lg">جاري تحميل بياناتك...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="text-red-400 text-xl mb-4">⚠️</div>
                <p className="text-red-300">{error}</p>
                <button
                  onClick={fetchUserProfile}
                  className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* بطاقة المستخدم الرئيسية */}
                <div className="bg-gradient-to-r from-[#0a2a42] to-[#0a3a5a] border border-cyan-900/30 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* الصورة الرمزية */}
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-800 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                      {user?.name?.charAt(0) || user?.username?.charAt(0) || "U"}
                    </div>
                    
                    {/* البيانات */}
                    <div className="flex-1 text-center md:text-right">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {user?.name || user?.username || "مستخدم"}
                      </h2>
                      <p className="text-cyan-300 text-lg mb-4">{user?.email}</p>
                      
                      <div className="inline-flex items-center gap-2 bg-cyan-900/30 text-cyan-200 px-4 py-2 rounded-full border border-cyan-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        حساب موثق
                      </div>
                    </div>
                  </div>
                </div>

                {/* تفاصيل الحساب */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* معلومات شخصية */}
                  <div className="bg-[#0a2a42]/50 border border-[#0a3a5a] rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="text-cyan-400">👤</span> المعلومات الشخصية
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">الاسم الكامل</p>
                        <p className="text-white text-lg">{user?.name || user?.username || "غير محدد"}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm mb-1">البريد الإلكتروني</p>
                        <p className="text-white text-lg">{user?.email || "غير محدد"}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm mb-1">معرف المستخدم</p>
                        <p className="text-white font-mono text-sm bg-[#051C2D] p-2 rounded">
                          {user?.userId || user?._id || "غير متوفر"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* معلومات النظام */}
                  <div className="bg-[#0a2a42]/50 border border-[#0a3a5a] rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="text-cyan-400">📊</span> معلومات النظام
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">تاريخ الانضمام</p>
                        <p className="text-white text-lg">
                          {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("ar-EG") : "غير محدد"}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm mb-1">آخر نشاط</p>
                        <p className="text-white text-lg">
                          {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString("ar-EG") : "غير محدد"}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm mb-1">حالة الحساب</p>
                        <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 px-3 py-1 rounded-full">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          نشط
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* رسالة توضيحية */}
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 text-2xl">💡</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">ملاحظة</h4>
                      <p className="text-gray-300">
                        يمكنك التواصل مع الدعم الفني لتعديل معلومات حسابك أو تغيير كلمة المرور.
                      </p>
                      <p className="text-blue-300 text-sm mt-2">
                        ITsupport@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;