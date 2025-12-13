import "./Signup.css";
function Signin() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
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
        
  {/* ====== هنا اريد الصفحة form يعني حتى المعلمات تنتقل للباك وتتعالج ======== */}
      <div className="signin-container">
      <div className="signin-card">
        <div className="signin-side">
          <h1 className="signup-side-title">لديك حساب من قبل ؟</h1>
          <p className="signup-side-subtitle">قم بتسجيل الدخول</p>
          <a href="/signin">
          <button className="signup-side-button"> تسجيل الدخول</button>
          </a>
        </div>
        <div className="signin-form-wrapper">
          <div className="signin-form">
            <h1 className="signin-title">انشاء حساب</h1>
            {/* ==== اريد رسالة تظهر فوك الادخال انو اذا المستخدم كتب اسمة بالعربي ممنوع الاسم فقط بالانكليزي ==== */}
            <label className="signin-label1">الأسم بالكامل</label>
            <input type="text" className="signin-input1" dir="rtl"/>
            <label className="signin-label1"> أسم المستخدم</label>
            <input type="text" className="signin-input1" dir="rtl"/>
            <label className="signin-label1">البريد الإلكتروني</label>
            <input type="email" className="signin-input2" dir="rtl"/>  
            <label className="signin-label2">كلمة المرور</label>
            <input type="password" className="signin-input3" dir="rtl" />
            <label className="signin-label3">تأكيد كلمة المرور</label>
             <input type="password" className="signin-input4" dir="rtl" />
            <button className="signin-button">انشاء حساب </button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Signin;
