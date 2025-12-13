// ==================================
// ==== ENCRYPTED FILES FRONTEND ====
// ==================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcom_page/welcompage.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import ProtectedRoute from "./utils/ProtectedPage/protected.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* === Protected Routes === */}
        {/* <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>}/> */}
        <Route path='/dashboard' element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
