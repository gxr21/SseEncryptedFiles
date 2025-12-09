import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="">Hello, World!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
