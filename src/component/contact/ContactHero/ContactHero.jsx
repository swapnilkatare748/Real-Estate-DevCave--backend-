import React, { useState } from "react";
import Styles from './ContactHero.module.css';
import img from '../../../assets/Contact/contact2.jpeg';


function ContactHero() {
  
  const handleScrollToForm = () => {
    const formElement = document.getElementById("formHero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }; 

  return (
    <div className={Styles.ContactHero}>
          <div className={Styles.content}>
               <h1 className={Styles.heading_content}> Contact Us</h1>
               <p>At <b>DevCaves</b>, we’re here to make your property journey as smooth and seamless as possible. Whether you’re looking for your dream home, a profitable investment, or have questions about our services, we’d love to hear from you!</p>
          </div>
          <div className={Styles.img}>
                 <img src={img} alt="image_banner" />    
          </div>
          <button onClick={handleScrollToForm} className={Styles.connect}>Connect us</button>
    </div>
  )
}

export default ContactHero
