import './style.css';
import Navbar from "./Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Contact" element={<Contact/>} />
          </Routes>

      </div>
    </>
  )
}

export default App;
