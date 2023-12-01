
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Contactus from './components/Contactus';
function App() {
  return (
 
    <>
    
    
      <BrowserRouter>
      <Navbar/>
      


        <Routes>
        
       
       
          <Route path='/' element={<Home/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
      
      </BrowserRouter>
      <Footer/>
    
    </>
  );
}

export default App;
