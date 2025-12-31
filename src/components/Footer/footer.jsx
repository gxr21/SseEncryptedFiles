import {useState} from "react"
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // إعادة تعيين الخطأ عند الكتابة
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // التحقق من صحة الإيميل
    if (!email) {
      setError("الرجاء إدخال البريد الإلكتروني");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("الرجاء إدخال بريد إلكتروني صالح");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      // هنا يمكنك وضع API endpoint الخاص بك
      const response = await fetch('https://your-api-endpoint.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setMessage("تم إرسال البريد الإلكتروني بنجاح!");
        setEmail(""); // إفراغ الحقل بعد الإرسال
      } else {
        setError("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
      }
    } catch {
      setError("فشل الاتصال بالخادم. تأكد من اتصالك بالإنترنت.");
    } finally {
      setLoading(false);
    }
  };

  return (
        <>
            <div className="bg-[#283646] p-20 text-right">
                <div className="grid grid-cols-3 gap-20 items-start">
                    <div>
                        <h3 className="text-[#3A86FF] font-bold text-lg mb-4">اسم الشركة</h3>
                        <p className="text-white leading-loose">
                            موقعنا يوفّر لك طريقة سهلة وآمنة <br />
                            لتشفير ملفاتك وحمايتها من أي <br />
                            وصول غير مصرح به، باستخدام <br />
                            تقنيات تشفير قوية وسريعة.
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-[#3A86FF] font-bold text-lg mb-4 ">طرق التواصل</h3>
                        <div className="text-white flex justify-end gap-2 mb-3" dir="rtl">
                            <span>الهاتف : 077xxxxxxxxx</span>
                            <img src="Icons/phone-call.png" className="w-5 h-5 invert" />
                        </div>
                        <div className="text-white flex justify-end gap-2 mb-3" dir="rtl">
                            <span>البريد الاكتروني : aboali@gmail.com</span>
                            <img src="Icons/mail.png" className="w-5 h-5 invert" />
                        </div>
                        <div className="text-white flex justify-end gap-2 mb-3" dir="rtl">
                            <span>العنوان : العراق ، البصرة</span>
                            <img src="Icons/location.png" className="w-5 h-5 invert" />
                        </div>
                    </div>
                    <div className="relative">
                        <form onSubmit={handleSubmit}>
                            <img src="Icons/shield.png" className="absolute left-0 top-0 w-14 h-14" />
                            <h3 className="text-[#3A86FF] font-bold text-lg mb-4">شفر بياناتك بأمان</h3>
                            <label className="block text-[#CFD3D7] mb-2">البريد الاكتروني</label>
                            <input 
                                type="email" 
                                placeholder="ادخل ايميلك" 
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full bg-[#2E3B4A] text-white placeholder-gray-400 p-3 border border-[#3A86FF] rounded-md outline-none mb-2 text-right" 
                                required
                            />
                            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                            {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
                            <button 
                                type="submit" 
                                className="bg-[#3A86FF] text-white w-32 py-2 rounded-md hover:bg-[#2957cc] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? 'جاري الإرسال...' : 'ارسال'}
                            </button>
                        </form>
                    </div>
                </div>
                <p className="text-white text-sm mt-10 opacity-80" dir="rtl">
                    &copy; الحقوق محفوظة لدى ابو عليو و ابو سالم 2025 
                </p>
            </div>
        </>
    );
};

export default Footer;
