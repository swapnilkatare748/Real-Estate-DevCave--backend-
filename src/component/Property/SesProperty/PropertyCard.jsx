import React from "react";
import  styles from './PropertyCard.module.css';

const PropertyCard = ({ propertyes }) => {

  return (
    <div className={styles.card}>
      <img src={propertyes.image} alt={propertyes.title} className={styles.image} />
      <div className={styles.content}>
        <h3>{propertyes.title}</h3>
        <p>{propertyes.description}</p>
        <p><strong>Price:</strong> {propertyes.price}</p>
        <p><strong>Carpet Area:</strong> {propertyes.carpetArea}</p>
        <div>
        <p><strong>BHK:</strong> {propertyes.BHK}</p>
        <p><strong>Status:</strong> {propertyes.status}</p>
        </div>
        <div className={styles.bottomdiv}><button className={styles.button}><i class="fa-solid fa-phone"></i> Contact</button> 
          <div className={styles.location}>
           <i class="fa-solid fa-location-dot"></i> {propertyes.location}
          </div>
         </div>
      </div>
    </div>
  );
};


  export default PropertyCard;
