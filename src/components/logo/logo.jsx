function Logo() {
    return(
        <div className="logo flex flex-row-reverse gap-4 ">         
              <h1 className="logo w-20 h-20 mx-2 text-white text-2xl " dir="rtl">
               LO<span className="text-[#20C997]">GO</span> 
              </h1>
              {/* === images === */}
              {/* <img src="/public/code.png" alt="logo" className="w-10 h-10"/> */}
            </div>
    );
}
export default Logo;