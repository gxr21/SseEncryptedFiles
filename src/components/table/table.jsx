function Table() {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* عنوان الجدول */}
        <div className="mb-8 text-right">
          <h2 className="text-3xl font-bold text-white mb-2">قائمة الملفات</h2>
          <p className="text-gray-300">عرض وتتبع جميع الملفات المرفوعة في النظام</p>
        </div>

        {/* حاوية الجدول */}
        <div className="bg-[#1d3c5a]/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-[#2a4d6e]">
          <div className="overflow-x-auto rounded-2xl">
            <table 
              className="min-w-full border-separate border-spacing-0 text-right rounded-2xl overflow-hidden"
              dir="rtl"
            >
              {/* رأس الجدول */}
              <thead className="bg-gradient-to-l from-[#2a5a8a] to-[#1d3c5a]">
                <tr>
                  <th className="py-5 px-6 text-white text-lg font-semibold border-b border-[#2a4d6e]">
                    #
                  </th>
                  <th className="py-5 px-6 text-white text-lg font-semibold border-b border-[#2a4d6e]">
                    اسم الملف
                  </th>
                  <th className="py-5 px-6 text-white text-lg font-semibold border-b border-[#2a4d6e]">
                    تاريخ الرفع
                  </th>
                  <th className="py-5 px-6 text-white text-lg font-semibold border-b border-[#2a4d6e]">
                    حالة الملف
                  </th>
                </tr>
              </thead>

              {/* جسم الجدول */}
              <tbody className="bg-[#172a3e]">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <tr 
                    key={index}
                    className={`
                      transition-all duration-300 hover:bg-[#1f3650]
                      ${index % 2 === 0 ? 'bg-[#172a3e]' : 'bg-[#1a3048]'}
                      ${index !== 4 ? 'border-b border-[#2a4d6e]' : ''}
                    `}
                  >
                    <td className="py-4 px-6 text-gray-300 text-center font-medium">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2a5a8a] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">ملف_المستخدم_{item}.pdf</p>
                          <p className="text-sm text-gray-400">حجم الملف: {2 + item} MB</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      <div>
                        <p>14/12/2024</p>
                        <p className="text-sm text-gray-400">10:3{item} صباحاً</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`
                        px-4 py-2 rounded-full text-sm font-medium
                        ${item % 3 === 0 
                          ? 'bg-green-900/30 text-green-300 border border-green-700' 
                          : item % 3 === 1
                          ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-700'
                          : 'bg-blue-900/30 text-blue-300 border border-blue-700'
                        }
                      `}>
                        {item % 3 === 0 ? 'مكتمل' : item % 3 === 1 ? 'قيد المراجعة' : 'مرفوع'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* تذييل الجدول */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#2a4d6e]">
            <div className="text-gray-400 text-sm">
              عرض 1 إلى 5 من 50 ملف
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#2a5a8a] text-white rounded-lg hover:bg-[#3169a1] transition-colors duration-300">
                السابق
              </button>
              <button className="px-4 py-2 bg-[#2a5a8a] text-white rounded-lg hover:bg-[#3169a1] transition-colors duration-300">
                التالي
              </button>
            </div>
          </div>
        </div>

        {/* زر التفاصيل */}
        <div className="mt-8 text-center">
          <button className="
            px-8 py-4 
            bg-gradient-to-r from-[#2a5a8a] to-[#1d3c5a]
            text-white text-lg font-semibold
            rounded-2xl
            hover:from-[#3169a1] hover:to-[#22496e]
            transition-all duration-300
            shadow-lg hover:shadow-xl
            border border-[#2a4d6e]
            hover:scale-105
            active:scale-95
          ">
            <div className="flex items-center justify-center gap-3">
              <span>تفاصيل الملف</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;