import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
    <Route>
     <Routes>
      path = "/" element={<Home />}
      </Routes>  
    </Route>
    </>
  )
}

export default App
