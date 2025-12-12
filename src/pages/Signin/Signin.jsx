
import "./Signin.css";
function Signup() {
  return (
    <>
    
    {/* === Background Here ! === */}
    {/* ====  بعدين اذا حبينة نفعلها هاي الخلفية لا تحذف الكود ال موجود ب مال خلفية  css =====*/}
    
        {/* <div className="encryption-bg">
        <div className="encryption-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        </div>

        <div className="binary-float">0101010011010101010</div>
        <div className="binary-float">1010010110100101100</div>
        <div className="binary-float">0011010101101010101</div>
        <div className="scan-line"></div>
        <div className="corner-glow top-left"></div>
        <div className="corner-glow bottom-right"></div>
        </div> */}

      <div className="signup-container">
      <div className="signup-card">
        <div className="signup-side">
          <h1 className="signup-side-title">ليس لديك حساب ؟</h1>
          <p className="signup-side-subtitle">قم بإنشاء حساب الآن</p>
          <a href="/signup">
          <button className="signup-side-button">إنشاء حساب</button>
          </a>
          
        </div>
        <div className="signup-form-wrapper">
          <div className="signup-form">
            <h1 className="signup-title">تسجيل الدخول</h1>
            <label className="signup-label">البريد الإلكتروني</label>
            <input type="email" className="signup-input" dir="rtl"/>
            <label className="signup-label">كلمة المرور</label>
            <input type="password" className="signup-input" dir="rtl" />
            <button className="signup-button">تسجيل الدخول</button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Signup;
