import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
            <ion-icon name="business-outline"></ion-icon> Devcave
          </a>
          <p className="footer-text">
            A great platform to buy, sell, and rent your properties without any
            agent or commissions.
          </p>
        </div>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Company</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> About us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Services
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Pricing
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Blog
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Login
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Useful Links</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Terms of Services
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Listing
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward"></ion-icon> Contact
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact Details</p>
          </li>
          <li className="footer-item">
            <ion-icon name="location-outline"></ion-icon>
            <address className="address">
              C/54 Northwest Freeway, Suite 558, Houston, USA 485
              <br />
              <a href="#" className="address-link">
                View on Google map
              </a>
            </address>
          </li>
          <li className="footer-item">
            <ion-icon name="mail-outline"></ion-icon>
            <a href="mailto:contact@example.com" className="footer-link">
              contact@example.com
            </a>
          </li>
          <li className="footer-item">
            <ion-icon name="call-outline"></ion-icon>
            <a href="tel:+152534468854" className="footer-link">
              +152 534-468-854
            </a>
          </li>
        </ul>
      </div>
   
      <div className="footer-bottom">
        <p className="copyright">
          &copy; Devcave RealEstate Pvt.{" "}
          <a href="#" className="copyright-link">
           Ltd.
          </a>
          .
        </p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
        <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
  </a>
      </div>
    </footer>


  );
}

export default Footer;
