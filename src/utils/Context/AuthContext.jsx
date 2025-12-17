import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  // 1. إضافة حالة التحميل (تكون true في البداية)
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // هذا الكود يشتغل أول ما الموقع يفتح
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = () => {
    try {
      const savedUser = localStorage.getItem("user");
      
      if (savedUser && savedUser !== "undefined") {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    // ✅ نمرر loading لباقي التطبيق
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {/* إذا كان لا يزال يحمل، لا تعرض شيئاً (أو اعرض شاشة تحميل) */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <h2>جاري التحميل...</h2>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export { AuthContext };