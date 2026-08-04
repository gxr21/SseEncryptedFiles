import { useState, useContext } from "react";
import axios from "axios";
import Logo from "../../components/logo/logo";
import { AuthContext } from "../../utils/Context/AuthContext";
// import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";
import { apiUrl } from "../../config/api";
function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  // const { user } = useContext(AuthContext);
  const API_UPLOAD_FILE = apiUrl("/api/v1/files/upload");
  const handleUpload = async () => {
    // if (!user){
    //   alert("يرجى تسجيل الدخول اولاً");
    //   return;
    // }
    if (!file) {
      alert("يرجى اختيار ملف أولاً");
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      await axios.post(API_UPLOAD_FILE, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded * 100) / e.total);
          setProgress(percent);
        },
      });

      alert("✅ تم رفع الملف بنجاح");
      setFile(null);
      setProgress(0);
    } catch (err) {
      console.error(err);
      alert("❌ فشل رفع الملف");
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="main-upload bg-[#051C2D] min-h-screen overflow-x-hidden">
      <div className="header-section flex items-center justify-between p-4 md:p-6 border-b border-[#0a2a42]">
        <div className="logo-container">
          <Logo />
        </div>
        {/* <div className="searchbar-container">
          <Searchbar />
        </div> */}
      </div>   
      <div className="main flex flex-col lg:flex-row rounded-2xl">
        <div className="w-full lg:w-64 lg:min-h-[calc(100vh-89px)] border-b lg:border-b-0 lg:border-r border-[#0a2a42]">
          <List activeId={5} />
        </div>

        <div className="flex-1 p-4 md:p-8 min-w-0">
          <div className="max-w-5xl mx-auto">
        <div className="titles">
          <div className="mb-6 text-right">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-right">
              رفع الملفات
            </h1>
            <h3 className="text-gray-300 text-base md:text-lg text-right font-medium">
              أضافة ملفات و رفعها في النظام
            </h3>
          </div>
        </div>
        <div className="upload-content bg-[#1d3c5a]/50 rounded-2xl w-full min-h-[420px] p-4 md:p-8 mb-6">
          <label className="block bg-[#2a5a8a] text-lg md:text-2xl text-white rounded-md py-3 px-4 text-center mb-8">
            ارفع الملف هنا
          </label>
          <input
            type="file"
            hidden
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="button flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">    
            <label
              htmlFor="fileInput"
              className="bg-[#2a5a8a] w-full max-w-64 aspect-square rounded-xl cursor-pointer flex items-center justify-center border border-[#3f78aa] hover:bg-[#3169a1] transition"
            >
              <p className="text-white text-2xl ">
                أضغط هنا
              </p>
            </label>
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="bg-[#14a577] w-full md:w-52 h-14 rounded-xl text-white text-lg md:text-xl font-medium disabled:opacity-50 hover:bg-[#12986d] transition"
            >
              {uploading ? "جاري الرفع..." : "رفع الملف"}
            </button>
          </div>  
          {file && (
            <div className="feilds mt-8">
              <div className="bg-[#2a5a8a] w-full rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
                <img
                  className="w-12 h-12 shrink-0"
                  src="/Icons/encryptefile.png"
                  alt="photo"
                />
                <div className="main-progress bg-white flex-1 h-4 md:h-6 rounded-xl overflow-hidden min-w-0">
                  <div
                    className="progressbar bg-sky-400 h-6 rounded-xl transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <label className="text-white text-base md:text-xl max-w-full sm:max-w-64 truncate">
                  {file.name}
                </label>
              </div>
            </div>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
