import React, { useState } from 'react'
import styles from './IndiaButton.module.css';
import india from '../../../assets/icons/India.jpeg';

function IndiaButton() {
  const [aeroDown,setAeroDown]=useState(true);

  return (
    <div className={styles.button}>
      <img src={india} alt="india image" />
      <button className={styles.Indiabutton} onClick={()=>{        
      if(!aeroDown){
        setAeroDown(true)
      }else{
        setAeroDown(false)
      }      
      }}>India </button> 
      <span>{(aeroDown) ?<i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</span>
     {!aeroDown && <div className={styles.cities}>
          <h3>Maharashtra</h3> 
           <div className={styles.AncharTagcities}>
           <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank"> <i class="fas fa-city"></i> Mumbai</a>
            <a href="https://en.wikipedia.org/wiki/Pune" target="_blank"><i class="fas fa-university"></i> Pune</a>
            <a href="https://en.wikipedia.org/wiki/Nagpur" target="_blank"><i class="fas fa-tree"></i> Nagpur</a>
            <a href="https://en.wikipedia.org/wiki/Nashik" target="_blank"><i class="fas fa-wine-bottle"></i> Nashik</a>
            <a href="https://en.wikipedia.org/wiki/Aurangabad,_Maharashtra" target="_blank"><i class="fas fa-landmark"></i> Aurangabad</a>
            <a href="https://en.wikipedia.org/wiki/Solapur" target="_blank"><i class="fas fa-industry"></i> Solapur</a>
            <a href="https://en.wikipedia.org/wiki/Kolhapur" target="_blank"><i class="fas fa-shoe-prints"></i>Kolhapur</a>
            <a href="https://en.wikipedia.org/wiki/Amravati" target="_blank"><i class="fas fa-cotton-bureau"></i> Amravati</a>
            <a href="https://en.wikipedia.org/wiki/Thane" target="_blank"><i class="fas fa-water"></i> Thane</a>
           <a href="https://en.wikipedia.org/wiki/Sangli" target="_blank"><i class="fas fa-leaf"></i> Sangli</a>
           </div>
      </div>
      }
    </div>
  )
}

export default IndiaButton
