import React from 'react'
import styles from './Contact.module.css';

import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className={styles.Contact}>     
           <div className={styles.content}>
               <a href="https://mail.google.com/mail/u/0/"><h5>Devcave@gmail.com</h5></a>
               <h5><b>+91</b> 9637053245</h5>
           </div>
           <div className={styles.links}>
            
              <a href="https://www.linkedin.com/in/er-siddhant-dhomse-11b186269/"><i class="fa-brands fa-twitter"></i>  <p className={styles.icon}>Twitter</p></a>
              <a href="https://www.linkedin.com/in/swapnil-katare"><i class="fa-brands fa-linkedin-in"></i>  <p className={styles.icon}>Linkdin</p></a>
              <a href="https://www.linkedin.com/in/swapnil-katare"><i class="fa-brands fa-facebook"></i>  <p className={styles.icon}>FaceBook</p></a>
           </div>
    </div>
  )
}

export default Contact
