import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../utils/Context/useAuth";
import { apiUrl } from "../../config/api";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const data = { email, password };

    try {
      const response = await axios.post(apiUrl("/api/v1/auth/login"), data);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        login(response.data);
        alert("تم تسجيل الدخول بنجاح");
        navigate("/dashboard");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "حدث خطأ غير متوقع";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="signup-container">
          <div className="signup-card">
            <div className="signin-side">
              <h1 className="signin-side-title">ليس لديك حساب ؟</h1>
              <p className="signin-side-subtitle">قم بإنشاء حساب الآن</p>
              <Link to={"/signup"}>
                <button type="button" className="signin-side-button">
                  إنشاء حساب
                </button>
              </Link>
            </div>
            <div className="signup-form-wrapper">
              <div className="signup-form">
                <h1 className="signup-title">تسجيل الدخول</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <label className="signup-label1">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="signup-input1"
                  dir="rtl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@gmail.com"
                />
                <label className="signup-label2">كلمة المرور</label>
                <input
                  type="password"
                  className="signup-input2"
                  dir="rtl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="***************"
                />
                <button
                  className="signup-button"
                  type="submit"
                  disabled={loading || !email || !password}
                >
                  {loading ? "جاري الدخول..." : "دخول"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
