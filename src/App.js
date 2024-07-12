import Home from "./files/Home";
import Volunter from "./files/Volunter";
import Contact from "./files/Contact";
import Event from "./files/Event";
import Project from "./files/Project"
import Navbar from "./files/Navbar";
import Blog from "./files/Blog";
import { Routes,Route } from "react-router-dom";
import { useEffect } from 'react';
import Footer from "./files/Footer";
function App(){
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
        }
    }
}, []);
  return(
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/Volunter" element={<Volunter/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Event" element={<Event/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Project" element={<Project/>}></Route>
        
      </Routes>
      
      <Footer/>     
    </div>
  )
}

export default App;