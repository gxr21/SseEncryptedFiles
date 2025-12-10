const Footer = () => {
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
                            <span>البريد الالكتروني : aboali@gmail.com</span>
                            <img src="Icons/mail.png" className="w-5 h-5 invert" />
                        </div>
                        <div className="text-white flex justify-end gap-2 mb-3" dir="rtl">
                            <span>العنوان : العراق ، البصرة</span>
                            <img src="Icons/location.png" className="w-5 h-5 invert" />
                        </div>
                    </div>
                    <div className="relative">
                        <img src="Icons/shield.png" className="absolute left-0 top-0 w-14 h-14" />
                        <h3 className="text-[#3A86FF] font-bold text-lg mb-4">شفر بياناتك بأمان</h3>
                        <label className="block text-[#CFD3D7] mb-2">البريد الالكتروني</label>
                        <input type="email" placeholder="ادخل ايميلك" className="w-full bg-[#2E3B4A] text-white placeholder-gray-400 p-3 border border-[#3A86FF] rounded-md outline-none mb-4 text-right" required/>
                        <button className="bg-[#3A86FF] text-white w-32 py-2 rounded-md hover:bg-[#2957cc] transition">ارسال</button>
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
