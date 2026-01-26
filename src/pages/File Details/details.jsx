function Details() {
  return (
    <div className="bg-[#051C2D] min-h-screen flex items-center justify-center">
      
      <div className="bg-[#082841] w-[900px] h-[420px] rounded-2xl p-8 flex gap-10">

        <div className="flex-1 text-right flex flex-col gap-6 justify-center">
          <p className="text-white text-2xl">: اسم الملف</p>
          <p className="text-white text-2xl">: حجم الملف</p>
          <p className="text-white text-2xl">: نوع الملف</p>
          <p className="text-white text-2xl">: حالة الرفع</p>
          <p className="text-white text-2xl">: حالة التشفير</p>
        </div>
        <div className="w-px bg-gray-400 opacity-60 "></div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="bg-[#0e4066] w-[160px] h-[160px] rounded-2xl flex items-center justify-center">
            <img
              src="/dist/Icons/file.png"
              alt="file"
              className="w-[100px] h-[100px]"
            />
          </div>
          <button className="w-[200px] h-[55px] rounded-xl bg-red-700 text-white font-bold hover:bg-red-500 transition">
            حذف الملف
          </button>
        </div>

      </div>
    </div>
  );
}

export default Details;
