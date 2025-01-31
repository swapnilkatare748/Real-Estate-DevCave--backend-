import React from 'react';
import styles from './map.module.css' 
import { Link } from 'react-router-dom';


function Map() {
  return (
    <div className={styles.Map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4804315261044!2d73.80296337417147!3d18.59744856682339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95d8c1f62cf%3A0xa88ec1997c7acf8b!2sDevcons%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734978620172!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className={styles.addres}>
       <h3>Davcave realState Pvt</h3>
       <p>Survey No.21, Ganesham Commercial -A, Office No. 4-B, Second Floor, 18-21/24, BRTS Road, Pimple Saudagar, Maharashtra 411027</p>
       <div className={styles.cities}>
       <div>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Mumbai</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/"><i className="fas fa-home"></i> Pune</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Nagpur</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Nashik</Link>
            </p>
          </div>

          <div>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Aurangabad</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Solapur</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Thane</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Kalyan-Dombivli</Link>
            </p>
          </div>

          <div>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Vasai-Virar</Link>
            </p>
            <p className={styles.cit}>
              <Link to="/error"><i className="fas fa-home"></i> Satara</Link>
            </p>
          </div>

       </div>
    </div>
    </div>
  );
}

export default Map;


