import React  from "react";
import styles from "./PropertyPage.module.css";
import Property from '../../component/Property/property/Property';
import Footer from '../../component/footer/Footer.jsx';
import Hero from '../../component/Property/property/PropertyHero/hero.jsx';
import SeProperty from "../SerchedProperties/SeProperty.jsx";

function PropertyPage() {

  return (
    
    <div className={styles.PropertyPage}>
        <Hero />
        <SeProperty/>
        <Property/>
        <br />
        <Footer/>
    </div>
  )
}

export default PropertyPage
