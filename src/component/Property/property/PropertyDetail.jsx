import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertyData from "./Data";



import './property-detail.css';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);


  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(null);
  useEffect(() => {

    const fetchPropertyDetails = () => {
      const selectedProperty = propertyData.find((prop) => prop.id === parseInt(id));
      setProperty(selectedProperty);
      setLoading(false);
    };

    fetchPropertyDetails();
  }, [id]);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(annualInterestRate) / 12 / 100;
    const totalMonths = parseInt(loanTenure) * 12;

    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setEmi(emi.toFixed(2));
  };


  if (loading) {
    return <div className="loading">Loading property details...</div>;
  }

  if (!property) {
    return <div className="error">Property not found!</div>;
  }

  return (
    <section className="property-details">
      <div className="container2">
        <h2 className="h2">{property.title}</h2>

        <div className="details-wrapper">
          <figure className="details-banner">
          <img
              src={property.image}
              alt={property.title}
              className="img-cover"
              loading="lazy"
            />
          </figure>

          <div className="details-wrapper1">
            {/* Left Section */}
            <div className="left-section">
              <div className="details-content">
                <p className="description">
                  This luxurious property features an expansive area with modern architecture and all necessary amenities for a comfortable lifestyle.
                </p>
                <ul className="details-list">
                  <li>
                    <strong>Area:</strong> {property.area}
                    <span className="right-side-item">
                      <strong>Starting Price:</strong> {property.startingPrice}
                    </span>
                  </li>
                  <li>
                    <strong>Beds:</strong> {property.beds}
                  </li>
                  <li>
                    <strong>Baths:</strong> {property.baths}
                  </li>
                  <li>
                    <strong>Price:</strong> {property.price}
                  </li>
                  <li>
                    <strong>Rating:</strong> {property.rating} ({property.reviews} reviews)
                  </li>

                </ul>

                <div className="qr-code-section">
                  <h3>RERA QR Code</h3>
                  <img
                    src="https://wallpapers.com/images/high/complex-q-r-code-pattern-2vc4e61vosv1szgj.png"
                    alt="RERA QR Code"
                    className="qr-code-image"
                  />
                </div>
              </div>

              {/* Project Summary */}
              {property.projectSummary && (
                <div className="project-summary">
                  <h3 className="h3">Project Summary</h3>
                  <div className="horizontal-layout">
                    <div>
                      <strong>Project Name:</strong> {property.projectSummary.name}
                    </div>
                    <div>
                      <strong>RERA No:</strong> {property.projectSummary.reraNo}
                    </div>
                    <div>
                      <strong>Developer:</strong> {property.projectSummary.developer}
                    </div>
                  </div>
                  <div className="horizontal-layout">
                    <div>
                      <strong>Parking Type:</strong> {property.projectSummary.parkingType}
                    </div>
                    <div>
                      <strong>Phase:</strong> {property.projectSummary.phase}
                    </div>
                    <div>
                      <strong>Number of Floors:</strong> {property.projectSummary.numberOfFloors}
                    </div>
                  </div>
                  <div className="horizontal-layout">
                    <div>
                      <strong>Land Area:</strong> {property.projectSummary.landArea}
                    </div>
                    <div>
                      <strong>Ownership Type:</strong> {property.projectSummary.ownershipType}
                    </div>
                    <div>
                      <strong>Construction Stage:</strong> {property.projectSummary.constructionStage}
                    </div>
                  </div>
                </div>
              )}

              {property.unitDetails && property.unitDetails.length > 0 && (
                <div className="unit-details">
                  <h3 className="h3">Unit Details</h3>
                  <table className="unit-details-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.unitDetails.map((unit, index) => (
                        <tr key={index}>
                          <td>{unit.type}</td>
                          <td>{unit.size}</td>
                          <td>{unit.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="emi-calculator">
                <h3 className="h3">EMI Calculator</h3>
                <div className="emi-form">
                  <label>
                    Loan Amount:
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Enter loan amount"
                    />
                  </label>
                  <label>
                    Annual Interest Rate (%):
                    <input
                      type="number"
                      value={annualInterestRate}
                      onChange={(e) => setAnnualInterestRate(e.target.value)}
                      placeholder="Enter annual interest rate"
                    />
                  </label>
                  <label>
                    Loan Tenure (Years):
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      placeholder="Enter loan tenure"
                    />
                  </label>
                  <button onClick={calculateEmi}>Calculate EMI</button>
                </div>
                {emi && (
                  <div className="emi-result">
                    <h4>Your Monthly EMI: ${emi}</h4>
                  </div>
                )}
              </div>


              {property.facilities && property.facilities.length > 0 && (
                <div className="facilities">
                  <h3 className="h3">Facilities</h3>
                  <div className="facilities-container">

                    <div className="facilities-column">
                      {property.facilities.slice(0, 7).map((facility, index) => (
                        <span key={index} className="facility-item">
                          ✅ {facility}
                        </span>
                      ))}
                    </div>

                    <div className="facilities-column">
                      {property.facilities.slice(7, 14).map((facility, index) => (
                        <span key={index} className="facility-item">
                          ✅ {facility}
                        </span>
                      ))}
                    </div>


                    <div className="facilities-column">
                      {property.facilities.slice(14).map((facility, index) => (
                        <span key={index} className="facility-item">
                          ✅ {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>



            {/* Right Section */}
            <div className="right-section">
              <h3>Interested in Similar Properties?</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" id="first-name" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" id="last-name" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" placeholder="Mobile Number" required />
                </div>
                <div className="form-group">
                  <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" id="design-services" />
                    I need design, fit-out or construction services
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" id="subscribe" />
                    Receive JLL emails
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" id="terms" />
                    I have read and agree to the Terms of Use & Privacy Statement
                  </label>
                </div>
                <button type="submit" className="btn-submit">Contact Us</button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PropertyDetail;

