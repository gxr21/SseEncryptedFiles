import DecryptedText from "../decrypt_motion/motion.jsx"

const FeedBack = ()=>{
    return (
        <> 
          <div className="bg-[#082F4D] w-full min-h-50 flex flex-col md:flex-row gap-8 justify-evenly items-center p-6 text-center">      
                       <div className=" flex flex-col justify-center items-center">
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80">
                            <DecryptedText text="4.9 / 5.0" animateOn="view" revealDirection="center" />
                        </p>
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80">
                            <DecryptedText text="رضا المستخدمين" animateOn="view" revealDirection="center" />
                        </p>
                       </div>
                       <div className=" flex flex-col justify-center items-center">
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80" dir="rtl">
                            <DecryptedText text="+150,000 ملف" animateOn="view" revealDirection="center" />
                        </p>
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80">
                            <DecryptedText text="ملفات مشفرة" animateOn="view" revealDirection="center" />
                        </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80" dir="rtl">
                            <DecryptedText text="365+ يوماً" animateOn="view" revealDirection="center" />
                        </p>
                        <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold opacity-80">
                            <DecryptedText text="أيام العمل المتواصل" animateOn="view" revealDirection="center" />
                        </p>
                        </div>
                     </div>
       </>
    )
}
export default FeedBack;
