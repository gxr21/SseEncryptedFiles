// =================================
// ===== SSE ENCRYPTED FILES =======
// =================================
 
import { BrowserRouter , Router , Route } from 'react-router-dom'
import './index.css'
// import {useState} from 'react'
function App() {
  return (
  <>
       <BrowserRouter>
       <Router>
        <Route path = "/" element ={<h1>Hello , World !</h1>}/>
       </Router>
       </BrowserRouter>
  </>
  )
}

export default App;