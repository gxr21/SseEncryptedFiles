import './list.css';

function List() {
  return (
    <div className="list-container h-full flex flex-col bg-gradient-to-b from-[#0a2538] to-[#051C2D] ">
      {/* User Profile Section */}
      <div className="user-section p-6 flex flex-col items-center border-b border-[#1a3a5a]">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#20C997] p-1">
            <img 
              src="Icons/user.png" 
              alt="User profile" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a2538]"></div>
        </div>
        <div className="text-center">
          <p className="font-bold text-white text-xl mb-1">المستخدم</p>
          <p className="text-gray-400 text-sm">Admin@system.com</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="navigation-section flex-1 p-4 overflow-y-auto">
        <div className="mb-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 px-2">القائمة الرئيسية</h3>
          <ul className="space-y-3">
            {[
              { id: 1, name: 'أستعراض الملفات', icon: '📁', active: true },
              { id: 2, name: 'أستعراض المجلدات', icon: '📂', active: false },
              { id: 3, name: 'المشاركة', icon: '🔗', active: false },
              { id: 4, name: 'استرجاع الملفات', icon: '↩️', active: false },
              { id: 5, name: 'رفع الملفات', icon: '⬆️', active: false },
            ].map((item) => (
              <li key={item.id} className="group">
                <button 
                  className={`
                    w-full text-right px-4 py-3.5 rounded-xl
                    flex items-center justify-between
                    transition-all duration-300 transform
                    hover:translate-x-[-4px]
                    ${item.active 
                      ? 'bg-gradient-to-r from-[#20C997] to-[#1aa67e] text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-[#1a3a5a] hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className={`
                    w-1.5 h-1.5 rounded-full transition-all duration-300
                    ${item.active 
                      ? 'bg-white opacity-100' 
                      : 'bg-[#20C997] opacity-0 group-hover:opacity-100'
                    }
                  `}></div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Options (Optional) */}
        <div className="mt-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 px-2">الإعدادات</h3>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-right px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a3a5a] hover:text-white transition-all duration-300 flex items-center gap-3">
                <span>⚙️</span>
                <span>الإعدادات</span>
              </button>
            </li>
            <li>
              <button className="w-full text-right px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a3a5a] hover:text-white transition-all duration-300 flex items-center gap-3">
                <span>🆘</span>
                <span>المساعدة</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Storage & Logout */}
      <div className="bottom-section p-4 border-t border-[#1a3a5a] bg-[#0a2538]/50">
        {/* Storage Info */}
        <div className="storage-info mb-4 p-3 bg-[#1a3a5a]/30 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">التخزين المستخدم</span>
            <span className="text-sm font-medium text-[#20C997]">4.2/10 GB</span>
          </div>
          <div className="w-full h-2 bg-[#1a3a5a] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#20C997] to-[#0ea5e9] w-2/3 rounded-full"></div>
          </div>
        </div>
        {/* Logout Button */}
        <button className="
          w-full py-3.5 px-4
          text-red-300 font-medium
          rounded-xl
          flex items-center justify-center gap-3
          bg-gradient-to-r from-red-900/20 to-red-800/10
          hover:from-red-900/40 hover:to-red-800/30
          hover:text-red-200
          transition-all duration-300
          border border-red-800/30
          hover:border-red-700/50
          group
        ">
          <span className="text-lg">🚪</span>
          <span>تسجيل الخروج</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">←</span>
        </button>
      </div>
    </div>
  );
}

export default List;