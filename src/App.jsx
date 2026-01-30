// ==================================
// ==== ENCRYPTED FILES FRONTEND ====
// ==================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcom_page/welcompage.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import ProtectedRoute from "./utils/ProtectedPage/protected.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
// import Folder from "./pages/Folders/folder.jsx";
import Restore from "./pages/Restore/Restore.jsx";
import Settings from "./pages/Settings/settings.jsx";
import Upload from "./pages/Upload/upload.jsx";
import Details from "./pages/file Details/details.jsx";
import PublicRoute from "./utils/ProtectedPage/public.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/folder" element={<Folder/>} /> */}
        {/* <Route path="/folders/:fileId" element={<Folder/>} /> */}
        <Route path="/restore" element={<Restore/>} />
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/upload" element={<Upload/>}/>
        {/* <Route path="/details" element={<Details/>} /> */}
        
         {/* IF USER LOGIN  */}

         <Route path='/' element={
          <PublicRoute>
             <WelcomePage/>
          </PublicRoute>}
          />
          <Route path='/signin' element={
          <PublicRoute>
            <Signin/>
          </PublicRoute>}
        />
        <Route path='/signup' element={
          <PublicRoute>
             <Signup/> 
          </PublicRoute>} 
        />
        {/* === Protected Routes === */}
        {/* <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
