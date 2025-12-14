import axios from "axios";
import "./Signup.css";
import { useState } from "react";

function Signup() {

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
     // منع اسم المستخدم بالعربي
    if (/[\u0600-\u06FF]/.test(username)) {
      setError("اسم المستخدم يجب أن يكون باللغة الإنجليزية فقط");
      return;
    }
    //تأكيد كلمة المرور
    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }
    const data = {  fullName,username,email,password};
   try {
    //ارسال البيانات بعد التحقق
    const response = await axios.post(
      "http://localhost:5000/signup",data);

    console.log("الرد من السيرفر:", response.data);

  } catch (error) {
    console.error("خطأ:", error.response?.data || error.message);
  }
    
    console.log("البيانات المرسلة:", data);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="signup-container">
          <div className="signup-card">

            <div className="signin-side">
              <h1 className="signin-side-title">لديك حساب من قبل ؟</h1>
              <p className="signin-side-subtitle">قم بتسجيل الدخول</p>
              <a href="/signin">
                <button type="button" className="signin-side-button">
                  تسجيل الدخول
                </button>
              </a>
            </div>

            <div className="signup-form-wrapper">
              <div className="signup-form">

                <h1 className="signup-title">انشاء حساب</h1>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <label className="signup-label1">الأسم بالكامل</label>
                <input
                  type="text"
                  className="signup-input1"
                  dir="rtl"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <label className="signup-label1"> أسم المستخدم</label>
                <input
                  type="text"
                  className="signup-input1"
                  dir="rtl"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label className="signup-label1">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="signup-input2"
                  dir="rtl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="signup-label2">كلمة المرور</label>
                <input
                  type="password"
                  className="signup-input3"
                  dir="rtl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label className="signup-label3">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  className="signup-input4"
                  dir="rtl"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className="signup-button" type="submit">
                  انشاء حساب
                </button>

              </div>
            </div>

          </div>
        </div>

      </form>
    </>
  );
}

export default Signup;
