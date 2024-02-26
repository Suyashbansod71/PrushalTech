import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import {Route, Routes} from "react-router-dom"
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import OurProject from './pages/OurProject/OurProject';
import Event from './pages/OurProject/Event';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services'element = {<Services/>}/>
        <Route path='/contact' element = {<Contact/>} />  
        <Route path = '/project' element = {<OurProject/>} />    
        <Route path = '/event' element = {<Event/>} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
