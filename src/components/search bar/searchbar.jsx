import "./searchbar.css";
function Searchbar() {
  return (
    <div className="searchbar relative w-full max-w-md">
      <div className="relative">
        <input 
          type="text" 
          id="search" 
          placeholder="ابحث عن ملفات، مجلدات، أو مستخدمين..."
          className="
            w-full
            py-3 px-12
            bg-[#0a2a42]
            text-white
            placeholder-gray-400
            rounded-xl
            border border-[#1a3a5a]
            focus:outline-none
            focus:border-[#20C997]
            focus:ring-2 focus:ring-[#20C997]/30
            transition-all duration-300
            text-right
            shadow-lg
            hover:border-[#2a4d6e]
          "
        />
        
        {/* Search Icon */}
        <div className="
          absolute left-3 top-1/2 transform -translate-y-1/2
          text-gray-400
        ">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Filter/Settings Icon (Optional) */}
        <div className="
          absolute right-3 top-1/2 transform -translate-y-1/2
          cursor-pointer
          text-gray-400 hover:text-[#20C997]
          transition-colors duration-300
        ">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;