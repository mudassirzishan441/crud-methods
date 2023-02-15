import React from 'react';
import NavBar from './Navbar/NavBar';
import Home from './Navbar/Home';
import Products from './Navbar/Products';
import Services from './Navbar/Services';
import About from './Navbar/About';
import ContactUs from './Navbar/ContactUs';
import Footer from './Footer/Footer';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';

const Landing = () => {

    return (
        <div>
            <h1>Landing Component</h1>

            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<ContactUs/>} />
            </Routes>
            <Footer/>
            </BrowserRouter>



            
            
          
            
            
        </div>
    );
};

export default Landing;