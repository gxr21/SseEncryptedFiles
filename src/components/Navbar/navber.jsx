import Button from "../../components/Buttons/button.jsx";
import './navbar.css'
function Navbar(){
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
    return (
        <>
          <div className="navbar flex px-6 py-2" dir='rtl'>
            {/* === Buttons === */}
            <div className=" flex  " dir="rtl">
              
              <Button
               text = 'تسجيل الدخول'
               color = '#20C997'
               link= '/signin'
              />
              <Button
               text = 'انشاء حساب'
               color = '#FFFFFF'
               textColor="#20C997"
               link= '/signup'
              />
              
            </div>
            {/* === Links === */}
           
            <ul className="flex justify-center items-center w-[60%] gap-16 " id="nav-links" >
              <li className="text-white text-[18px] font-bold transition-all duration-initial hover:text-[#20C997]" onClick={() => scrollToSection("about-section")}><a href="#about">حول الموقع</a></li>
              <li className="text-white text-[18px] font-bold transition-all duration-initial hover:text-[#20C997]" onClick={() => scrollToSection("hero-section")}><a href="#home">الرئيسية</a></li>
              <li className="text-white text-[18px] font-bold transition-all duration-initial hover:text-[#20C997]" onClick={() => scrollToSection("recommendations-section")}><a href="#recommendations">التوصيات</a></li> 
            </ul>
             <div className="w-70 "></div>
            {/* === Logo === */}
            <div className="logo flex flex-row-reverse gap-4 ">         
              <h1 className="logo w-20 h-20 mx-2 text-white text-2xl " dir="rtl">
               LO<span className="text-[#20C997]">GO</span> 
              </h1>
              {/* === images === */}
              {/* <img src="/public/code.png" alt="logo" className="w-10 h-10"/> */}
            </div>
          </div>
        </>
    )
 }
 export default Navbar;
 