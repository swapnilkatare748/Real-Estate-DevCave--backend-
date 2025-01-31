import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import ScrollToTop from './component/ScrollTop/ScrollTop';
import Hero from './component/heroHome/Hero';
import About from './page/about/About';
import Service from './page/service/Service';
import Property from './component/Property/property/Property';
import Contact from './component/contact/Contact';
import Newsletter from './page/newsletter/Newsletter';
import Footer from './component/footer/Footer';
import PropertyDetail from './component/Property/property/PropertyDetail';
import AboutUs from './page/aboutus/AboutUs';
import AboutDetails from './page/aboutus/AboutDetails';
import HeroForm from './component/heroHome/form/HeroForm';
import ContactPage from './page/ContactPage/ContactPage';
import Error from './page/ErrorPage/Error';
import PropertyPage from './page/PropertyPage/PropertyPage';
import SeProperty from './page/SerchedProperties/SeProperty';
import ServicePage from './page/servicePage/ServicePage';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
       
        <Route path="/property/:id" element={<PropertyDetail />} />     
       
       
        <Route path="/property" element={<PropertyPage/>}>
          {/* <Route path="buy" element={<Buy />} /> */}
          {/* <Route path="sell" element={<Sell />} /> */}
        </Route>

        
        <Route path="/propertyes" element={<Property/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/seProperty" element={<SeProperty/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/" element={
          <>           
            <Hero />
            <HeroForm/>
            <About />
            <Service />
            <Property />
            <Contact />
            <Newsletter />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
