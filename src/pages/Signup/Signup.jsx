import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    
    // توليد معاينة لاسم المستخدم (حروف صغيرة وبدون مسافات)
    const previewUser = value.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    setUsername(previewUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("كلمة المرور غير متطابقة");
      setLoading(false);
      return;
    }

    const data = {
      name: fullName,
      username,
      email,
      password
    };

    try {
      const response = await axios.post("http://localhost:5500/api/v1/auth/register", data);
      if (response.status === 201 || response.status === 200) {
        alert('تم انشاء الحساب بنجاح');
        navigate("/signin");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "حدث خطأ غير متوقع";
      setError(msg);
      setLoading(false);
      console.log('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup-container">
          <div className="signup-card">
            <div className="signin-side">
              <h1 className="signin-side-title">لديك حساب من قبل؟</h1>
              <p className="signin-side-subtitle">قم بتسجيل الدخول</p>
              <Link to={"/signin"}>
                <button type="button" className="signin-side-button">
                  تسجيل الدخول
                </button>
              </Link>
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
                  onChange={handleNameChange}
                  required
                />
                <label className="signup-label1"> أسم المستخدم</label>
                <input
                  type="text"
                  className="signup-input1"
                  dir="rtl"
                  value={username}
                  readOnly
                  disabled
                  required
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
                  required
                />
                <label className="signup-label3">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  className="signup-input4"
                  dir="rtl"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  className="signup-button"
                  type="submit"
                  disabled={loading || !fullName || !email || !password || !confirmPassword}
                >
                  {loading ? 'جاري الانشاء...' : 'انشاء حساب'}
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
