// ==================================
// ==== ENCRYPTED FILES FRONTEND ====
// ==================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcom_page/welcompage.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Signin from "./pages/Signin/SIgnin.jsx";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        {/* === Protected Routes === */}

        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
