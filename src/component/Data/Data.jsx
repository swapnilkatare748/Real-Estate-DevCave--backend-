import React, { useState } from 'react'
// import Hero from '../heroHome/Hero';
import styles from './Data.module.css';
function Data() {
 
  const [properties,setProperties] = useState([]);
  const featchProperties = async (query) => {
    console.log("Fetching properties with query:", query); // Log the search query
    try {
      const response = await fetch(
        `https://api.example.com/properties?search=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      const data = await response.json();
      console.log("Fetched properties data:", data); // Log the fetched data
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error); // Log the error
    }
  };
  return (
    <div>
      <h1> this is Data page</h1>
      <div className={styles.propertyList}>
        {properties.map((property)=>(
          <div key={property.id} className={styles.propertyItem}>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Data
