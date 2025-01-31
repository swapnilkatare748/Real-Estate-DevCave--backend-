import React, { useState } from 'react';
import styles from './RentForm.module.css';

const RentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    propertyName: '',
    rentPrice: '',
    address: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      propertyName: '',
      rentPrice: '',
      address: '',
      contactInfo: '',
    });
  };

  return (
    <div className={styles.rentformRapper}>
    <h4 className='rentHeading'>Rent Form</h4>
    <form onSubmit={handleSubmit} className={styles.RentForm}>
      <div>
        <label>Property Name:</label>
        <input
          type="text"
          name="propertyName"
          value={formData.propertyName}
          onChange={handleChange}
          placeholder="Enter property name"
          required
        />
      </div>

      <div>
        <label>Rent Price:</label>
        <input
          type="number"
          name="rentPrice"
          value={formData.rentPrice}
          onChange={handleChange}
          placeholder="Enter rent price"
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
      </div>

      <div>
        <label>Contact Info:</label>
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Enter contact information"
          required
        />
      </div>
    

    </form>
    <button type="submit" className={styles.submit} onClick={()=>{alert("Data sent sucess full")}} >Submit</button>
    </div>
  );
};

export default RentForm;
