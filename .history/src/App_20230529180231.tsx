import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
    <Route>
      path = "/" element={<Home />} 
    </Route>
    </>
  )
}

export default App
