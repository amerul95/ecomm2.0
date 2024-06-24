
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/Home';
import Footer from './components/footer/Footer.js'
import Office from './Pages/Office'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/office' element={<Office/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}


