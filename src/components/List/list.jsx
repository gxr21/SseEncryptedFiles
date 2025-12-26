import './list.css';
function List() {
    return (
        <div className="list flex flex-col justify-between items-center bg-[#072a43] w-[230px] h-[570px] rounded-3xl py-6 translate-y-5 absolute right-2 bottom-9  bg-linear-to-b from-[#072a43]/20 to-[#072a43]/10 backdrop-blur-xl border border-white/20 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-filter group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] " dir='ltr'>
            {/* Header Section */}
            <div className='flex flex-col items-center gap-3 w-full' dir='rtl'>
                <div className='flex flex-row justify-center items-center gap-10'>
                    <img src="Icons/user.png" alt="photo" className='img w-10 h-10 bg-amber-50 rounded-full' />
                    <p id='username' className='font-bold text-white text-lg'>المستخدم</p>
                </div>              
                {/* Menu Items */}
                <div className='w-full px-3 mt-2 text-xl '>
                    <ul className="ul w-full text-center space-y-8 border-none">
                        <li className="li  h-[50px] rounded-lg flex justify-center items-center bg-[#ffffff]  cursor-pointer hover:bg-[#ffffff] transition-all hover:border-[#20C997]">
                            <button className="bt1 text-amber-50 w-full h-full text-black hover:text-[#20C997] ">أستعراض الملفات</button>
                        </li>
                        <li className="li  h-[50px] rounded-lg flex justify-center items-center bg-[#20C997] cursor-pointer hover:bg-[#ffffff] transition-all hover:border-[#20C997]">
                            <button className="bt text-amber-50 w-full h-full hover:text-[#20C997]">أستعراض المجلدات</button>
                        </li>
                        <li className="li  h-[50px] rounded-lg flex justify-center items-center bg-[#20C997] cursor-pointer hover:bg-[#ffffff] transition-all hover:border-[#20C997]">
                            <button className="bt text-amber-50 w-full h-full hover:text-[#20C997]">المشاركة</button>
                        </li>
                        <li className="li  h-[50px] rounded-lg flex justify-center items-center bg-[#20C997] cursor-pointer hover:bg-[#ffffff] transition-all hover:border-[#20C997]">
                            <button className="bt text-amber-50 w-full h-full hover:text-[#20C997]">استرجاع الملفات</button>
                        </li>
                        <li className="li  h-[50px] rounded-lg flex justify-center items-center bg-[#20C997] cursor-pointer hover:bg-[#ffffff] transition-all hover:border-[#20C997]">
                            <button className="bt text-amber-50 w-full h-full hover:text-[#20C997]">رفع الملفات</button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Logout Button */}
            <div className='w-full px-3 text-xl flex justify-center items-center'>
                <button className='signout  w-[180px] h-[50px] rounded-lg absolute bottom-4 text-rose-700 border-2 border-rose-600 hover:bg-rose-700 hover:text-white cursor-pointer transition-all'>
                    تسجيل الخروج
                </button>
            </div>
        </div>
    );
}

export default List;