import React from "react";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {

const [FormData,setFormData] = useState({
 name:"",
 email:"",
 number:"",
 message:"",
}
);

// get data 
const handlechangeData=(e)=>{
    const {id,value} = e.target; // extract input and value
    setFormData((prevState)=>({
      ...prevState,
      [id]:value, //dynamically set the property on input
    }))
}

  const submitData = async (e)=>
  {   
    e.preventDefault(); 
    try{
         const response = await fetch("http://localhost:3000/api/message/create",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(FormData),
         });
         if(response.ok){
          window.alert('your message has been set sucessfully !');
          setFormData({name:"",email:"",number:"",message:""});
         }else{
          window.alert("faild to send your message plase tyr agin latter");
         }
    }catch(error){
      console.error("Error submitting form :",error);
      window.alert("an error occurd .plase try again later.");
    }
      
  };

  return (
    <div id="formHero" className={styles.formContainer}>
    <h2 className={styles.title}>Contact Us</h2>
<form action="/" className={styles.form}>
<div className={styles.formGroup}>
 <label htmlFor="name">Name</label>
 <input type="text" id="name" onChange={handlechangeData} placeholder="Name" value={FormData.name} required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="email">Email</label>
 <input type="email" id="email" onChange={handlechangeData} value={FormData.email} placeholder="Email" required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="number">Phone Number</label>
 <input type="text" id="number" onChange={handlechangeData} value={FormData.number} placeholder="Number" required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="message">Message</label>
 <textarea id="message" value={FormData.message}  onChange={handlechangeData}  placeholder="Write your message here" rows="5"></textarea>
</div>
<button type="submit" onClick={submitData} className={styles.submitButton}>
 Submit
</button>
</form>
</div>
  );
};

export default ContactForm;
