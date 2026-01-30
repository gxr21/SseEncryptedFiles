import { useState, useEffect } from "react";
import "./searchbar.css";

function Searchbar({ onSearch, placeholder = "ابحث عن ملفاتك..." }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // 1️⃣ Debounce: تحديث النص المبحوث عنه بعد توقف الكتابة بـ 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // 2️⃣ استدعاء دالة البحث: تم فصلها عن "onSearch" لتجنب الـ Infinite Loop ✅
  useEffect(() => {
    // التحقق من أن onSearch هي دالة فعلاً قبل استدعائها
    const executeSearch = (query) => {
      if (onSearch && typeof onSearch === "function") {
        onSearch(query);
      }
    };

    if (debouncedQuery.trim() !== "") {
      setIsSearching(true);
      executeSearch(debouncedQuery);
      
      // إخفاء مؤشر البحث بعد ثانية واحدة
      const timer = setTimeout(() => setIsSearching(false), 1000);
      return () => clearTimeout(timer);
    } else {
      // إذا تم مسح النص، نبلغ الأب لعرض كل البيانات
      executeSearch("");
    }
    
    // ⚠️ الملحوظة المهمة: لا نضع onSearch في هذه المصفوفة أبداً
  }, [debouncedQuery]); 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (onSearch && typeof onSearch === "function") {
        setIsSearching(true);
        onSearch(searchQuery);
        setTimeout(() => setIsSearching(false), 1000);
      }
    }
  };

  return (
    <div className="searchbar relative w-full max-w-md">
      <div className="relative">
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full py-3 px-10 bg-[#0a2a42] text-white placeholder-gray-400 rounded-xl border border-[#1a3a5a] focus:outline-none focus:border-[#20C997] focus:ring-2 focus:ring-[#20C997]/30 transition-all duration-300 text-right shadow-lg pr-12"
        />
        
        {/* زر مسح البحث (يظهر فقط عند وجود نص) */}
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors duration-300 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {/* أيقونة البحث / مؤشر التحميل */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {isSearching ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#20C997]"></div>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </div>

        {/* نص "جاري البحث" */}
        {isSearching && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-[#20C997] animate-pulse">
            جاري البحث...
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;