import React,{useState} from 'react'
import styles from './sell.module.css';
function Sell() {
   
        const [formData,setFormData] = useState({
            propertyType:"",
            location:"",
            price:"",
            contact:"",
        });
 const handlChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...FormData,[name]:value})
 };

 const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("form data submitted:",formData);
    alert("property details submitted sucessfully ")
 };

  return (
    <div className={styles.sell}>
        <h3> Sell Property </h3>
        <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="">
          Property Type :
           <select name="propertyType" value = {formData.propertyType} onChange={handlChange} required >
            <option value="">Select</option>
            <option value="Apartement" >Aprtment</option>
            <option value="House">House</option>
            <option value="land">Land</option>
           </select>
         </label> <br /><br />

         <label>
            Location:
            <input type="text"
             name='location'
             value = {formData.location}
             onChange={handlChange}
             placeholder="Enter city or Address"
             required
            />
         </label>
         <br /><br />
         <label htmlFor="">
            price  :
            <input type="text"
            name='price'
            value={formData.price}
            onChange={handlChange}
            placeholder='Enter price' 
            required />
         </label>
         <br /><br />
         <label htmlFor="">
            Contact Number : 
            <input type="text" 
              name='contact'
              value={formData.contact}
              onChange={handlChange}
              placeholder='Enter your phon nuber'
              required
            />
         </label>
         <br /><br />
         <button type='Submit' className={styles.submit}> Submit</button>
        </form>
    </div>
  )
}

export default Sell
