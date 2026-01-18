function UserTable({ title, subtitle }) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">

        {/* العنوان */}
        <div className="mb-8 text-right">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <h3 className="text-lg font-medium text-gray-300">{subtitle}</h3>
        </div>

        {/* المربع الرئيسي */}
        <div className="bg-[#1d3c5a]/50 rounded-3xl p-20 flex flex-row-reverse gap-8 min-h-[350px]">

          
          <div className="flex-1 space-y-5 max-w-md pb-5">

            <div>
              <label className="block mb-2 text-right text-gray-300 font-medium text-xl">اسم المستخدم</label>
              <input
                type="text"
                className="w-full px-4 py-4 text-right rounded-lg bg-[#0a2538] text-white
                           border border-[#2a5a8a] focus:outline-none
                           focus:ring-2 focus:ring-[#20C997]"
                placeholder="تغيير اسم المستخدم"
              />
            </div>

            <div>
              <label className="block mb-2 text-right text-gray-300 font-medium text-xl">كلمة المرور</label>
              <input
                type="password"
                className="w-full px-4 py-4 text-right rounded-lg bg-[#0a2538] text-white
                           border border-[#2a5a8a] focus:outline-none
                           focus:ring-2 focus:ring-[#20C997]"
                placeholder="تغيير كلمة المرور"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 text-right font-medium text-xl">البريد الإلكتروني</label>
              <input
                type="email"
                className="w-full px-4 py-4 rounded-lg text-right bg-[#0a2538] text-white
                           border border-[#2a5a8a] focus:outline-none
                           focus:ring-2 focus:ring-[#20C997]"
                placeholder="example@email.com"
              />
            </div>

          </div>

          {/*profile*/}
          <div className="flex flex-col items-center w-1/3 relative right-40 top-5">
            <div className="relative mb-6">
              <div className="w-50 h-50 rounded-full border-4 border-[#20C997] p-1 bg-white">
                <img
                  src="Icons/user.png"
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0a2538]" />
            </div>
            <p className="font-bold text-white text-2xl mb-1 text-center">المستخدم</p>
            <p className="text-gray-400 text-sm text-center">Admin@system.com</p>
          </div>
        <div className="button w-35 h-10 text-white border border-white  bg-cyan-800 hover:bg-cyan-600 text-center rounded-lg text-xl relative top-89 left-210 pt-1">
        تأكيد
      </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default UserTable;
