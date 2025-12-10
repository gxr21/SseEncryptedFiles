// ==================================
// ==== ENCRYPTED FILES FRONTEND ====
// ==================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcom_page/welcompage.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import ProtectedRoute from "./utils/ProtectedPage/protected.jsx";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        {/* === Protected Routes === */}

        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
