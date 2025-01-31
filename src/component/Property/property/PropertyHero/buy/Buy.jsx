import React, { useState, useEffect } from 'react';
import styles from "./buy.module.css";

function Buy() {

   const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <div className={styles.Buy} >
          <h3>Buy Property</h3>
           <form action="submit" className={styles.form}>
            <div className="search">
                <label htmlFor="search">Search : </label>
                <input type="text" placeholder='Enter porperty' onChange={(e)=>{
                  setSearch(event.target.value);
                }} required/>
            </div>
            <div className={styles.categories}>
                <label htmlFor="catg">Categaries</label>
                 <select name="House" id="catg" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="House">House</option>
                    <option value="Aprtment">Aprtment</option>
                    <option value="office">Office</option>
                    <option value="TownHome">TownHome</option>
                 </select>
            </div>
            <div className={styles.prise}>
            <label htmlFor="price">Min price</label>
                 <select name="price" id="price" onChange={(e)=>{setMinPrice(e.target.value)}}>
                    <option value="5000">5000</option>
                    <option value="5000">10000</option>
                    <option value="5000">15000</option>
                    <option value="5000">50000</option>
                    <option value="5000">550000</option>
                    <option value="5000">150000</option>
                 </select>
            </div>
            <div className={styles.prise}>
            <label htmlFor="price2">Max Price</label>
                 <select name={styles.Max} id="price2">
                    <option value="5000">5000</option>
                    <option value="5000">7000</option>
                    <option value="5000">3000</option>
                    <option value="5000">2000</option>
                    <option value="5000">50000</option>
                    <option value="5000">25000</option>
                 </select>
            </div>
         <button type='Submit' className={styles.submit}> Submit</button>

           </form>
    </div>
  )
}

export default Buy
