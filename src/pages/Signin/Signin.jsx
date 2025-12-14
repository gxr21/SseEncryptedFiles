import axios from "axios";
import { useState } from "react";
import "./Signin.css";
function Signin() {
   const [email,setEmail] = useState("")
   const [password,setPassword]=useState("")
   
  const HandleSubmit = async (e) => {
  e.preventDefault();
  const data = {email,password};

  try {
    const response = await axios.post(
      "http://localhost:5000/signin",data);

    console.log("الرد من السيرفر:", response.data);

  } catch (error) {
    console.error("خطأ:", error.response?.data || error.message);
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
          <a href="/signin">
          <button className="signup-side-button">إنشاء حساب</button>
          </a>
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
            />
            <label className="signin-label">كلمة المرور</label>
            <input type="password" 
            className="signin-input" 
            dir="rtl" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signin-button" type="submit">تسجيل الدخول</button>
          </div>
        </div>
      </div>
    </div>
    </form>
    </>
    
  );
}

export default Signin;
