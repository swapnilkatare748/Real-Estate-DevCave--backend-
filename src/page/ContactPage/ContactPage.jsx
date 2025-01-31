import React from 'react'
import styles from './ContactPage.module.css';
import Contact from '../../component/contact/Contact';
import Footer from '../../component/footer/Footer';
import ContactHero from '../../component/contact/ContactHero/ContactHero';
import Map from '../../component/contact/Map/Map';
import ContactForm from '../../component/contact/FormContact/ContactForm';
import ContactDiscription from '../../component/contact/ContactDiscription/ContactDiscription';

function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <br/>
       <ContactHero/>
       <Map/>
       <div className={styles.contactcontainer}>
        <ContactDiscription/>
       <ContactForm/>
       </div>
      
       <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
