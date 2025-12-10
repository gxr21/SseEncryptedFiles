import Navbar from "../../components/Navbar/navber.jsx"
import Footer from "../../components/Footer/footer.jsx"
import FeedBack from "../../components/Feedback/feedback.jsx"
import './welcompage.css'
function WelcomePage(){
return (
        <>
        {/*
        ============================
        هذن القيم الي استخدمناهن 
        بالمشروع خصوصا الخلفية
        ============================
        Bais Color :
        - text-[#20C997]
        =================
        Bais Baccground :
         - bg-[#051C2D]
        =================
        Bais Color :
        - text-[#20C997]
        ================= 
        Bais Baccground :
         - bg-[#051C2D]
        ================

        */}

        {/* === Background Here ! === */}

        <div className="encryption-bg">
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
        </div>
            <div className="Landingpage min-h-screen w-full overflow-hidden" >
                <Navbar />

                {/* HERO SECTION = FULL SCREEN */}
                <section className="min-h-screen flex flex-col justify-center items-center p-4" id="hero-section">
                    <h1 className="text-5xl text-white font-bold mb-6">مرحبا بك</h1>
                    <p className="font-normal text-white text-2xl text-center p-4 leading-relaxed w-[70%]">
                        نوفر لك طريقة آمنة وموثوقة لحماية ملفاتك من خلال تقنيات<br />
                        تشفير تضمن بقاء بياناتك سرية بالكامل قبل رفعها إلى السحابة الإلكترونية
                    </p>
                </section>
                {/* SECTION 2 */}
                <section className="py-32 text-center" id="about-section">
                    <h1 className="text-4xl text-white font-normal p-6">عن الموقع</h1>
                    <p className="text-white text-2xl" dir="rtl">
                        موقعنا هو منصة متخصصة لرفع وتخزين الملفات مع<br/>
                        تشفير كامل من جانب الخادم (Server-Side Encryption) <br/>
                        لضمان حماية البيانات بشكلٍ عالي المستوى.
                    </p>
                </section>
                {/* === FeedBack === */}
                <FeedBack/>
                {/* SECTION 3 */}
                <section className="py-32 text-center" id="recommendations-section">
                    <h1 className="text-4xl text-white font-normal p-6 relative bottom-10">التوصيات</h1>
                    <div className="flex flex-col justify-center items-center space-y-20 gap-30" dir="rtl">
                        <div className="flex justify-center items-center gap-20">
                            <div className="flex flex-col justify-center items-center">
                                <img src="Icons/hide.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl m-2">استخدم كلمة مرور قوية</h1>
                                <p className="text-white text-xl m-2"> اختر كلمة مرور تحتوي على :</p>
                                <ul className="list-disc text-right text-white text-xl ">
                                        <li>أحرف صغيرة وكبيرة</li>
                                        <li>أرقام</li>
                                        <li>رموز خاصة</li>
                                        <li>طول لا يقل عن 10 خانات</li>
                                    </ul>
                            </div>
                            {/* <span class="text-white text-4xl h-10 font-bold rounded-md ">|</span> */}
                            <div className="flex flex-col justify-center items-center">
                                <img src="Icons/authentication.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl m-2">فعّل التحقق عبر البريد الإلكتروني</h1>
                                <p className="text-white text-xl m-3">إبقاء بريدك الإلكتروني مفعّل يساعد في :</p>
                                <ul className="list-disc text-right text-white text-xl">
                                    <li>استرجاع الحساب</li>
                                    <li>تأكيد تسجيل الدخول</li>
                                    <li>منع أي محاولات دخول مشبوهة</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src="/Icons/phishing.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl m-2">كن حذراً من الرسائل المزيفة (Phishing)</h1>
                                <p className="text-white text-xl m-3">لا تضغط على روابط مشبوهة تُرسل لك عبر :</p>
                                <ul className="list-disc text-right text-white text-xl">
                                    <li>البريد</li>
                                    <li>مواقع التواصل</li>
                                    <li>رسائل غير متوقعة </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-10">
                            <div className="flex flex-col justify-center items-center relative bottom-5">
                                <img src="Icons/social-engineering.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl "> لا تشارك كلمة مرورك مطلقاً</h1>
                                <p className="text-white text-xl leading-loose">
                                    لا ترسل بيانات الدخول إلى أي شخص، <br/>بما في ذلك الدعم الفني.<br/> فريقنا لن يطلب كلمة المرور نهائياً.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src="/Icons/logout.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl m-2">قم بتسجيل الخروج من الأجهزة المشتركة</h1>
                                <p className="text-white text-xl m-3">إذا استخدمت الموقع من :</p>
                                <ul className="list-disc text-right text-white text-xl">
                                    <li>مكتبة</li>
                                    <li>مقهى إنترنت</li>
                                    <li>جهاز شخص آخر</li>
                                </ul>
                                <p className="text-white text-xl">تأكد من تسجيل خروجك لحماية ملفاتك.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src="/Icons/document.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl m-2 "> لا ترفع ملفات حساسة جداً بدون تشفير مسبق</h1>
                                <p className="text-white text-xl text-right m-3">لأقصى درجات الحماية (التشفير المزدوج) :</p>
                                <p className="text-white text-xl text-right">
                                    ملفاتك شديدة الحساسية<br/> (كالمستندات الحكومية) على جهازك قبل رفعها،<br/> بالرغم من تشفير النظام التلقائي.
                                </p>
                            </div>
                        </div>

                        {/* === توصيات عند الحاجة === */}
                        
                        {/* <div className="flex justify-center items-center gap-10">
                            <div className="flex flex-col justify-center items-center">
                                <img src="Icons/lock.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl">الامان</h1>
                                <p className="text-white text-xl">نحن نضمن لك امان كامل لبياناتك</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src="Icons/lock.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl">الامان</h1>
                                <p className="text-white text-xl">نحن نضمن لك امان كامل لبياناتك</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src="Icons/lock.png" className="w-20 h-20 invert" />
                                <h1 className="text-white text-2xl">الامان</h1>
                                <p className="text-white text-xl">نحن نضمن لك امان كامل لبياناتك</p>
                            </div>
                        </div> */}
                    </div>
                </section>
                {/* === Footer === */}
                <Footer />
            </div>
        </>
    )
}

export default WelcomePage;
