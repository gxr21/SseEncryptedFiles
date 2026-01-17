function Table({ title, columns, data ,subtitle}) {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* العنوان */}
        <div className="mb-8 text-right">
          <h2 className="text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          <h3 className="text-1xl font-bold text-gray-300 mb-2">
            {subtitle}
          </h3>
        </div>

        {/* الجدول */}
        <div className="bg-[#1d3c5a]/50 rounded-3xl p-6">
          <table className="min-w-full h-100 text-right" dir="rtl">

            {/* رأس الجدول */}
            <thead className="bg-[#2a5a8a] ">
              <tr>
                <th className="py-4 px-6 text-white rounded text-2xl text-center">ت</th>
                {columns.map(col => (
                  <th key={col.key} className="py-4 px-6 text-white  rounded text-2xl">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* جسم الجدول */}
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="py-4 px-6 text-center text-amber-50 text-lg ">
                    {index + 1}
                  </td>

                  {columns.map(col => (
                    <td key={col.key} className="py-4 px-6 text-amber-50 text-lg">
                      {col.render
                        ? col.render(row)
                        : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            

          </table>
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

        
        
      </div>
      
    </div>
    
  );
}

export default Table;
