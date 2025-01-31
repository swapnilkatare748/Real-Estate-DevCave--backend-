import React, { useState,useEffect } from 'react'
import styles from './SeProperty.module.css';
import { Link } from 'react-router-dom';
import PropertyCard from '../../component/Property/SesProperty/PropertyCard';
import card1 from '../../assets/Property/propertycard/card1.jpg';
import card3 from '../../assets/Property/propertycard/card2.jpg';
import card2 from '../../assets/Property/propertycard/card3.jpg';
import card4 from '../../assets/Property/propertycard/card4.jpeg';
import Filter from '../../component/Property/SesProperty/FilterComponent/Filter';
import { use } from 'react';
import axios from 'axios';



function SeProperty() {

  // const [property,setProperties] = useState([]);
  // const propertiesCount = propertyList.length();
    const properties = [
        {
          id: 1,
          title: "Pioneer Vasantshree",
          description: "3 BHK Flat in Dhankawadi, Pune",
          price: "₹90 Lac",
          carpetArea: "933 sqft (87 sqm)",
          bhk: "3 BHK",
          status: "Under Construction",
          image: card1, // Replace with actual URLs
          location: "Pune",
        },
        {
          id: 2,
          title: "Sunshine Residency",
          description: "2 BHK Flat in Kothrud, Pune",
          price: "₹75 Lac",
          carpetArea: "850 sqft (79 sqm)",
          bhk: "2 BHK",
          status: "Ready to Move",
          image: card2,
          location: "Mumbai",
        },
        {
          id: 3,
          title: "Green Acres",
          description: "4 BHK Villa in Baner, Pune",
          price: "₹1.5 Cr",
          carpetArea: "2500 sqft (232 sqm)",
          bhk: "4 BHK",
          status: "Under Construction",
          image: card3,
          location: "Banglore",
        },
        {
          id: 4,
          title: "Elegant Heights",
          description: "3 BHK Flat in Wakad, Pune",
          price: "₹1.2 Cr",
          carpetArea: "1200 sqft (111 sqm)",
          bhk: "3 BHK",
          status: "Ready to Move",
          image: card1,
          location: "pune",
        },
        {
          id: 5,
          title: "Luxury Haven",
          description: "5 BHK Penthouse in Koregaon Park, Pune",
          price: "₹5 Cr",
          carpetArea: "4000 sqft (371 sqm)",
          bhk: "5 BHK",
          status: "Under Construction",
          image: card2,
          location: "Thane",
        },
        {
          id: 6,
          title: "Skyline Apartments",
          description: "1 BHK Flat in Hadapsar, Pune",
          price: "₹45 Lac",
          carpetArea: "600 sqft (56 sqm)",
          bhk: "1 BHK",
          status: "Under Construction",
          image: card4,
          location: "Beed",
        },
      ];
      
  const [propertyList, setPropertyList] = useState([]);
  
  useEffect(()=>{
    const fetchProperties = async () =>{
      try{
              const response = await axios.get('http://localhost:3000/api/property/');
              setPropertyList(response.data);

      }catch(error){
        console.error('Error fetching property ',error);
      }
    };
    fetchProperties();
  },[]);


  const filterProperties = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = propertyList.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.location.toLowerCase().includes(searchTerm)
    );
    setPropertyList(filtered);
  };
      
 return (
    <div className={styles.SeeProperty}>
       <div className={styles.first}>
         <Filter setPropertyList = {setPropertyList} properties={properties}/>
       </div>
       <div className={styles.last}>
           <h3>{propertyList.length} result |  Property in Pune for Sale</h3>
           <div className={styles.inputSerch}>
            <select name="" id="">
                <option value="Buy">BUY</option>
                <option value="Sell">Sell</option>
            </select>
            <input type="text" placeholder='Enter Place | Price | keyWords' onChange={filterProperties} />
             <button type='submit' > <i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
          <div className='properties'>
            {propertyList.map((property,index) => (
               <PropertyCard key={property.id} propertyes={property} />
          ))}
         </div>
       </div>
    </div>
               )
}

export default SeProperty
