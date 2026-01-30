import { useState } from "react";
import axios from "axios";
import Logo from "../../components/logo/logo";
import Searchbar from "../../components/search bar/searchbar";
import List from "../../components/List/list";

function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("يرجى اختيار ملف أولاً");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:3000/upload", formData, {
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
    <div className="main-upload bg-[#051C2D] min-h-screen">
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="searchbar-container">
          <Searchbar />
        </div>
      </div>

      
      <div className="main flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={5} />
        </div>

        <div className="titles">
          <div className="relative top-14 left-298">
            <h1 className="text-white text-3xl font-bold text-right">
              رفع الملفات
            </h1>
            <h3 className="text-gray-300 text-lg text-right font-medium">
              أضافة ملفات و رفعها في النظام
            </h3>
          </div>
        </div>

        <div className="upload-content bg-[#1d3c5a]/50 rounded-3xl w-287 h-135 relative top-37 left-10">
          <label className="bg-[#2a5a8a] text-2xl text-white px-90 rounded-md py-2 relative top-7 left-33">
            ارفع الملف هنا
          </label>

         
          <input
            type="file"
            hidden
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="button">
            
            <label
              htmlFor="fileInput"
              className="bg-[#2a5a8a] w-60 h-70 rounded-xl relative top-20 left-20 cursor-pointer flex items-center justify-center"
            >
              <img
                className="w-30 h-30"
                src="dist/Icons/file.png"
                alt="photo"
              />
            </label>

            
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="bg-[#14a577] w-50 h-15 rounded-xl relative top-37 left-25 text-white text-xl font-medium disabled:opacity-50"
            >
              {uploading ? "جاري الرفع..." : "رفع الملف"}
            </button>
          </div>

         
          {file && (
            <div className="feilds">
              <div className="bg-[#2a5a8a] w-150 h-16 rounded-lg relative bottom-50 left-130 flex">
                <img
                  className="w-13 h-13 relative left-135 top-2"
                  src="dist/Icons/file.png"
                  alt="photo"
                />

                <div className="main-progress bg-white w-110 h-6 rounded-xl relative left-2 top-8">
                  <div
                    className="progressbar bg-sky-400 h-6 rounded-xl transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <label className="text-white text-xl relative right-20">
                  {file.name}
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;
