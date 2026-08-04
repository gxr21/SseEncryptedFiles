import React, { useState } from 'react';

function Table({ title, columns, data = [], subtitle }) {
  // 1️⃣ تعريف المتغيرات الخاصة بالتنقل
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // عدد الصفوف في كل صفحة

  // 2️⃣ حساب المؤشرات (Indices) لقص البيانات
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  
  // هذه هي البيانات التي ستظهر في الصفحة الحالية فقط
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // حساب عدد الصفحات الكلي
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // 3️⃣ دوال التنقل
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">

        {/* العنوان */}
        <div className="mb-5 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          <h3 className="text-sm md:text-base font-bold text-gray-300 mb-2">
            {subtitle}
          </h3>
        </div>

        {/* الجدول */}
        <div className="bg-[#1d3c5a]/50 rounded-2xl p-3 md:p-6 overflow-hidden">
          <div className="w-full overflow-x-auto">
          <table className="min-w-[760px] w-full text-right" dir="rtl">

            {/* رأس الجدول */}
            <thead className="bg-[#2a5a8a] ">
              <tr>
                <th className="py-4 px-6 text-white rounded text-2xl text-center">ت</th>
                {columns.map(col => (
                  <th key={col.key} className="py-3 px-4 text-white rounded text-base md:text-lg whitespace-nowrap">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* جسم الجدول */}
            <tbody>
              {/* ⚠️ نستخدم currentRows بدلاً من data لعرض 5 فقط */}
              {currentRows.length > 0 ? (
                currentRows.map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 text-center text-amber-50 text-sm md:text-base">
                      {/* معادلة لعرض الرقم التسلسلي الصحيح عبر الصفحات */}
                      {indexOfFirstRow + index + 1}
                    </td>

                    {columns.map(col => (
                      <td key={col.key} className="py-4 px-4 text-amber-50 text-sm md:text-base whitespace-nowrap">
                        {col.render
                          ? col.render(row)
                          : row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 1} className="py-8 text-center text-gray-400 text-xl">
                    لا توجد بيانات للعرض حالياً
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>

          {/* تذييل الجدول (أزرار التنقل) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6 pt-6 border-t border-[#2a4d6e]">
            
            <div className="text-gray-400 text-sm">
              {/* عرض ديناميكي للأرقام: عرض 1 إلى 5 من 20 */}
              عرض {data.length > 0 ? indexOfFirstRow + 1 : 0} إلى {Math.min(indexOfLastRow, data.length)} من {data.length} ملف
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-[#2a5a8a] text-white rounded-lg transition-colors duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3169a1]'}`}
              >
                السابق
              </button>
              
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages || data.length === 0}
                className={`px-4 py-2 bg-[#2a5a8a] text-white rounded-lg transition-colors duration-300 ${currentPage === totalPages || data.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3169a1]'}`}
              >
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
