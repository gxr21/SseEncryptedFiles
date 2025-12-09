// =================================
// ===== SSE ENCRYPTED FILES =======
// =================================
 
 
import './index.css'
import {useState} from 'react'
function App() {
  const [Button , setButton] = useState("Check")
  const handleClick = () => {
    setButton("Checked")
  }
  return (
    <>
      <div className="test flex flex-col min-h-screen bg-gray-800">
        {/* ===== HEADER ===== */}
        <header className='w-full'>
          <div className="navbar w-full bg-gray-900 p-4 flex justify-between items-center">
            <div className="logo-site flex items-center">
              <span className="text-2xl text-cyan-400 font-bold tracking-widest">
                TailWind 
              </span>
            </div>
            <nav className="navbar-links">
              <ul className="flex gap-10 text-2xl">
                <li className="text-white font-semibold">
                  <a href="#" className='transition-all duration-300 hover:text-cyan-400'>Home</a>
                </li>
                <li className="text-white font-semibold">
                  <a href="#" className='transition-all duration-300 hover:text-cyan-400'>Contact</a>
                </li>
                <li className="text-white font-semibold">
                  <a href="#" className='transition-all duration-300 hover:text-cyan-400'>About</a>
                </li>
              </ul>
            </nav>
            <img src="/code.png" alt="logo" className="w-16 h-16 brightness-1 invert" />
          </div>
        </header>
        
        {/* ===== MAIN ===== */}
        <main className="flex-grow p-4 md:p-8">
          <section className="Hero mb-12 md:mb-16">
            <h1 className="font-bold text-3xl text-cyan-400 mb-4">What is TailWind ?</h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8">
              Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. <br className="hidden md:block" /> It provides low-level utility classes that you can use to build any design directly in your markup.
            </p>
            <h1 className="text-3xl text-cyan-400 font-bold mb-4">Why we use TailWind ?</h1>
            <p className="text-gray-300 text-xl md:text-2xl">
              Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. <br className="hidden md:block" /> It provides low-level utility classes that you can use to build any design directly in your markup.
            </p>
          </section>
          
          <section className="mt-12">
            <h1 className="text-3xl text-cyan-400 font-bold mb-8 text-center">Components Of TailWind</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="Card-1 bg-amber-50 w-full max-w-xs h-64 rounded-2xl shadow-2xl p-4 flex flex-col">
                <p className="text-2xl text-cyan-400 font-bold text-center mb-4">Services 1</p>
                <p className="text-2xl font-bold text-center mb-6">Check</p>
                {/* <div className="flex-grow"></div> */}
                <button 
                  className="bg-cyan-400 rounded-xl w-32 h-12 mx-auto font-bold text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-105 cursor-pointer"
                  onClick={handleClick}
                >
                  {Button}
                </button>
              </div>
              
              <div className="Card-2 bg-amber-50 w-full max-w-xs h-64 rounded-2xl shadow-2xl p-4 flex flex-col">
                <p className="text-2xl text-cyan-400 font-bold text-center mb-4" onClick={handleClick}>Services 2</p>
                <p className="text-2xl font-bold text-center mb-6">Chack</p>
                {/* <div className="flex-grow"></div> */}
                <button 
                  className="bg-cyan-400 rounded-xl w-32 h-12 mx-auto font-bold text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-105 cursor-pointer"
                  onClick={handleClick}
                >
                  Check
                </button>
              </div>
              
              <div className="Card-3 bg-amber-50 w-full max-w-xs h-64 rounded-2xl shadow-2xl p-4 flex flex-col">
                <p className="text-2xl text-cyan-400 font-bold text-center mb-4" >Services 3</p>
                <p className="text-2xl font-bold text-center mb-6">Check</p>
                {/* <div className="flex-grow"></div> */}
                <button 
                  className="bg-cyan-400 rounded-xl w-32 h-12 mx-auto font-bold text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-105 cursor-pointer"
                  onClick={handleClick}
                >
                  Check
                </button>
              </div>
            </div>
          </section>   
        </main>
        
        {/* ===== FOOTER ===== */}
        <footer className="w-full flex justify-center items-center bg-cyan-600 h-16 p-4 mt-8 ">
          <p className="font-bold text-amber-50 text-xl md:text-2xl tracking-widest">
            &copy; 2025 TailWind CSS
          </p>
        </footer>
      </div>
    </>
  )
}

export default App