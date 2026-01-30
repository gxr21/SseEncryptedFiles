import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "../../components/logo/logo.jsx";
import Searchbar from "../../components/search bar/searchbar.jsx";
import Table from "../../components/table/table.jsx";
import List from "../../components/List/list.jsx";
import Btn from "../../components/Buttons/colors/Red.jsx";
import { p } from "motion/react-client";

function Folder() {
  const [folders,setFolders] = useState([]);
  const [loading,setLoading] = useState(true);
  const [offline,setoffline] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  
    const dashboardColumns = [
    {
  key: "name",
  label: "اسم المجلد",
  render: (row) => (
    <div className="flex flex-col text-right ">
      <span className="text-white font-medium">
        {row.name}
      </span>
      <span className="text-sm text-gray-400">
        {row.description}
      </span>
    </div>
  )
},

  ];

  const dashboardData = [
    { name: "مستندات", description: "570.3kb", date: "14/12/2024" },
    { name: "python", description: "170.3mb", date: "07/09/2024" },
    { name: "ملفات اكسل", description: "80.3mb", date: "06/02/2025" },
    { name: "بيانات الادارة", description: "70.34kb", date: "27/04/2025" },
    { name: "قسم المحاسبة", description: "590.3kb", date: "06/09/2025" },
  ];
useEffect(() => {
  const fetchFolders = async () => {
    try {
      const token = localStorage.getItem("token");

      // محاولة الاتصال بالسيرفر
      const response = await axios.get("http://localhost:5173/folders", {
        timeout: 5000, // لو ما رد خلال 5 ثواني
        headers: { Authorization: `Bearer ${token}` },
      });

      // تحويل البيانات بالشكل المطلوب
      const mappedData = response.data.map(folder => ({
        name: folder.name,
        description: folder.size,
        date: new Date(folder.createdAt).toLocaleDateString("ar-EG"),
      }));

      setFolders(mappedData); // لو نجح السيرفر
      setoffline(false); // السيرفر شغال
    } catch (error) {
      console.warn("⚠️ السيرفر غير متصل، عرض بيانات افتراضية");
      setFolders(dashboardData); // لو فشل السيرفر
      setoffline(true);
    } finally {
      setLoading(false); // انتهى التحميل
    }
  };

  fetchFolders();
}, []);

    return(
        <div className="folder bg-[#051C2D] min-h-screen overflow-hidden ">
 
      <div className="header-section flex items-center justify-between p-6 border-b border-[#0a2a42]">

        <div className="logo-container">
          <Logo />
        </div>

        <div className="searchbar-container  ">
          <Searchbar />
        </div>
      </div>
      
      <div className="main-content flex rounded-2xl">
        <div className="w-64 border-r border-[#0a2a42]">
          <List activeId={2} />
        </div>
        <div className="flex-1 p-6 gap-4 relative">
          {offline && (
        <div className="bg-yellow-900/50 border border-yellow-600 text-yellow-200 p-3 rounded-lg  text-center">
          ⚠️ تعذر لاتصال بالسيرفر- يتم عرض بيانات أفتراضية
        </div>
          )}


      {loading ?(
        <p className="text-white text-right mt-10 ">
          جاري التحميل...
         
        </p>

      ) : (
        <div className="flex-1 p-6">
          <Table
            title="قائمة المجلدات "
            subtitle="عرض وتتبع جميع المجلدات المرفوعة في النظام"
            columns={dashboardColumns}
            data={folders}
          />
        </div>
      )}
        </div>
            
         <div className="relative min-h-[400px]"> {/* الحاوية */}
              <div className="absolute bottom-147 left-180 flex gap-4">
                <Btn
                  text="اضافة مجلد"
                  color="bg-sky-800"
                  hover="hover:bg-sky-600"
                />
                <Btn
                  text="حذف مجلد"
                  color="bg-red-800"
                  hover="hover:bg-red-600"
                />

              </div>

            </div>

           

            {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      {uploadedFiles.map((f, idx) => (
                        <div key={idx} className="text-white text-right">
                          <a
                            href={f.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline"
                          >
                            {f.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

      </div>
        
        
        
     
    </div>
        
    
  
    
    );
}
export default Folder;