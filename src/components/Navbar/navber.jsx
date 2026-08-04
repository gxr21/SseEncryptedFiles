import Button from "../../components/Buttons/button.jsx";
import './navbar.css';

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="navbar flex flex-col items-center justify-between gap-4 px-4 py-4 md:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        dir="rtl"
      >
        {/* === Buttons === */}
        <div className="nav-actions flex flex-wrap justify-center gap-2 lg:justify-self-start" dir="rtl">
          <Button text="تسجيل الدخول" color="#20C997" link="/signin" />
          <Button text="انشاء حساب" color="#FFFFFF" textColor="#20C997" link="/signup" />
        </div>

        {/* === Links === */}
        <ul
          className="nav-links flex flex-wrap items-center justify-center gap-4 md:gap-10 lg:justify-self-center"
          id="nav-links"
        >
          <li
            className="text-white text-[18px] font-bold transition-all duration-200 hover:text-[#20C997]"
            onClick={() => scrollToSection("about-section")}
          >
            <a href="#about">حول الموقع</a>
          </li>
          <li
            className="text-white text-[18px] font-bold transition-all duration-200 hover:text-[#20C997]"
            onClick={() => scrollToSection("hero-section")}
          >
            <a href="#home">الرئيسية</a>
          </li>
          <li
            className="text-white text-[18px] font-bold transition-all duration-200 hover:text-[#20C997]"
            onClick={() => scrollToSection("recommendations-section")}
          >
            <a href="#recommendations">التوصيات</a>
          </li>
        </ul>

        {/* === Logo === */}
        <div className="logo flex flex-row-reverse items-center gap-4 lg:justify-self-end">
          <h1 className="logo h-auto mx-2 text-white text-2xl" dir="rtl">
            LO<span className="text-[#20C997]">GO</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;

