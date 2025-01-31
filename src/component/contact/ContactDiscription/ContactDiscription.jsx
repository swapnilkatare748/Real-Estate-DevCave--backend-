import React from 'react'
import styles from './ContactDisc.module.css';
function ContactDiscription() {
  return (
    <div className={styles.ContactDiscription}>
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you with any inquiries or support you may need.</p>
        <p><b>Email us at:</b> support@yourwebsite.com</p>
        <p> <strong>Call us at:</strong> +123-456-7890</p>
        <p> <strong>Visit us at: </strong>1234, Your Street, Your City, Your Country</p>
        <p>Alternatively, fill out the form below, and we’ll get back to you as soon as possible.</p>
    </div>  
  )
}

export default ContactDiscription
