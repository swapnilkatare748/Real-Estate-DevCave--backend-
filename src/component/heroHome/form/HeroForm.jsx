import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroForm.module.css"; // Import modular CSS
import RentForm from "./RentForm/RentForm.jsx";
import Sell from "./Sell/Sell.jsx";
import { motion } from "framer-motion";

function HeroForm() {
  const variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" }, // Blur effect when hidden
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)", // Remove blur on visibility
      transition: { duration: 0.5 },
    },
  };

  const navigate = useNavigate();
  const [setForm, GetForm] = useState("buy");
  const RenderComponent = () => {
    switch (setForm) {
      case "sell":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <Sell />
          </motion.div>
        );
      case "Rent":
        return (
          <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <RentForm/>
        </motion.div>
      );
      default:
        return (
          <div>
            <div className={styles.Buy}>
              <h3>Buy Property</h3>
              <form action="submit" className={styles.form}>
                <div className="search">
                  <label htmlFor="search">Search : </label>
                  {/* <input type="text" placeholder='Enter porperty' required/> */}
                  <input
                    type="text"
                    placeholder="Enter  property location"
                    className={styles.inputSearch}
                  />
                </div>
                <div className={styles.categories}>
                  <label htmlFor="catg">Categaries</label>
                  <select name="House" id="catg">
                    <option value="House">House</option>
                    <option value="Aprtment">Aprtment</option>
                    <option value="office">Office</option>
                    <option value="TownHome">TownHome</option>
                  </select>
                </div>
                <div className={styles.prise}>
                  <label htmlFor="price">Min price</label>
                  <select name="price" id="price">
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
                <button
                  type="none"
                  onClick={() => {
                    navigate("/seProperty");
                  }}
                  className={styles.submit}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        );
    }
  };

  const serchHandlar = () => {
    navigate("/property");
  };
  return (
    <>
      <div className={styles.heroFormWrapper}>
        <div className={styles.formTab}>
          <button
            onClick={() => {
              GetForm("Buy");
            }}
            className={styles.tabBtn}
            data-tab-btn
          >
            Buy
          </button>
          <button
            onClick={() => {
              GetForm("sell");
            }}
            className={styles.tabBtn}
            data-tab-btn
          >
            Sell
          </button>
          <button
            onClick={() => {
              GetForm("Rent");
            }}
            className={styles.tabBtn}
            data-tab-btn
          >
            Rent
          </button>
        </div>
        <div className={styles.RenderComponent}>{RenderComponent()}</div>
      </div>
    </>
  );
}

export default HeroForm;
