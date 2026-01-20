import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";

function Upload() {
    return(
        <div className="main-upload bg-[#051C2D] min-h-screen">
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">

        <div className="logo-container">
          <Logo />
        </div>

        <div className="searchbar-container  ">
          <Searchbar />
        </div>
      </div>
      {/*upload continer*/}
      <div className="main flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={5} />
        </div>
        <div className="titles  ">
            <div className="relative top-14 left-298 ">
                <h1 className="text-white text-3xl font-bold text-right ">رفع الملفات</h1>
                <h3 className="text-gray-300 text-lg text-right font-medium"> أضافة ملفات و رفعها في النظام   </h3>

            </div>

        </div>
        <div className="upload-content  bg-[#1d3c5a]/50 rounded-3xl w-287 h-135 relative top-37 left-10 ">
          <label className="bg-[#2a5a8a] text-2xl text-white px-90 rounded-md py-2 relative top-7 left-33  ">ارفع الملف هنا</label>
          <div className="button ">
            <button className="bg-[#2a5a8a] w-60 h-70 rounded-xl relative top-20 left-20">
              <img className="w-30 h-30 relative left-16" src="dist\Icons\file.png" alt="photo" />
            </button>
            <button className="bg-[#14a577] w-50 h-15 rounded-xl relative top-37 right-35 text-white text-xl font-medium">رفع الملف</button>
          </div>

          <div className="feilds">
            <div className="bg-[#2a5a8a] w-150  h-16 rounded-lg relative bottom-50 left-130 flex">
              
              <img className="w-13 h-13 relative left-135 top-2 " src="dist\Icons\file.png" alt="photo" />
              <div className="main-progress bg-white w-110 h-6 rounded-xl relative left-2 top-8">
                 <div className="progressbar bg-sky-400 w-90 h-6 rounded-xl relative left-20"></div>
                 </div>
                <label className="text-white text-xl relative right-20">جدول.pdf</label>
              
            </div>

                        <div className="bg-[#2a5a8a] w-150  h-16 rounded-lg relative bottom-35 left-130 flex">
              
              <img className="w-13 h-13 relative left-135 top-2 " src="dist\Icons\file.png" alt="photo" />
              <div className="main-progress bg-white w-110 h-6 rounded-xl relative left-2 top-8">
                 <div className="progressbar bg-sky-400 w-50 h-6 rounded-xl relative left-60"></div>
                 </div>
                <label className="text-white text-xl relative right-20">ملف.pdf</label>
              
            </div>

                        <div className="bg-[#2a5a8a] w-150  h-16 rounded-lg relative bottom-20 left-130 flex">
              
              <img className="w-13 h-13 relative left-135 top-2 " src="dist\Icons\file.png" alt="photo" />
              <div className="main-progress bg-white w-110 h-6 rounded-xl relative left-2 top-8">
                 <div className="progressbar bg-sky-400 w-70 h-6 rounded-xl relative left-40 "></div>
                 </div>
                <label className="text-white text-xl relative right-20">بيانات.pdf</label>
              
            </div>
          </div>
          

        </div>



      </div>







        </div>
    );
}
export default Upload;