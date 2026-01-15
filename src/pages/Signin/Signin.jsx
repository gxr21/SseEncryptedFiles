import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/Context/useAuth";
import "./Signin.css";
import { Link } from "react-router-dom";
function Signin() {
   const [email,setEmail] = useState("")
   const [password,setPassword]=useState("")
   const [loading,setLoading] = useState(false)
   const navigate = useNavigate();
   const {login} = useAuth();
  
  const HandleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const data = {email,password};
  try {
    const response = await axios.post(
      "http://localhost:5500/api/v1/auth/login",data);
      if (response.status === 200 || response.status === 201) {
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("user", JSON.stringify(response.data.user));
        login(response.data)
        alert("تم تسجيل الدخول بنجاح");
        navigate("/dashboard");
      }

  } catch (error) {
    alert(error.response?.data?.message || "حدث خطأ غير متوقع");
    setLoading(false);
    console.log("Error", error);
  }
  finally {
    setLoading(false);
  }
};
  
  return (
    <>
    <form onSubmit={HandleSubmit}>
    
      <div className="signin-container">
      <div className="signin-card">
        <div className="signup-side">
          <h1 className="signup-side-title">ليس لديك حساب ؟</h1>
          <p className="signup-side-subtitle">قم بإنشاء حساب الآن</p>
          <Link to="/signup">
          <button className="signup-side-button">إنشاء حساب</button>
          </Link>
        </div>
        <div className="signin-form-wrapper">
          <div className="signin-form">
            <h1 className="signin-title">تسجيل الدخول</h1>
            <label className="signin-label">البريد الإلكتروني</label>
            <input type="email" 
            className="signin-input" 
            dir="rtl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@gmail.com"
            />
            <label className="signin-label">كلمة المرور</label>
            <input type="password" 
            className="signin-input" 
            dir="rtl" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="***************"
            />
            <button className="signin-button" type="submit" 
            disabled={loading}
            >{loading ? "جاري الدخول..." : "دخول"}</button>
          </div>
        </div>
      </div>
    </div>
    </form>
    </>
    
  );
}

export default Signin;
