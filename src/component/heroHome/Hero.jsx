import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Hero.module.css';
import img1 from '../../assets/Hero/hero-bg.jpg';
import img2 from '../../assets/Hero/real-estate-16.jpg';
import img3 from '../../assets/Hero/Hero4.jpg';
import img4 from '../../assets/Hero/Hero3.jpg';

// Array of images for the slider
const images = [img1, img2, img3, img4];

function Hero({ onSearch }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search triggered with query:", query);
    if (onSearch) {
      try {
        onSearch(query); // Trigger the parent function to fetch properties
        console.log("onSearch executed successfully.");
       
      } catch (error) {
        console.error("Error in onSearch function:", error);
      }
    }

  };

  const handleSearch2 = () => {
    console.log("Search button clicked");
    // Navigate to a new route after the button is clicked
    navigate('/property'); // Replace '/newRoute' with the desired route
  };

  // Function to go to the next image in the slider
  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 500); // Match the CSS animation duration
  };

  // Function to go to the previous image in the slider
  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };



  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className={`${style.hero} ${fade ? style.fade : ''}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <h1>The Simplest Way to Find the Property</h1>
      <h5>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5>
      <h5>It is a paradisematic country, in which roasted parts.</h5>

      {/* Search bar */}
      {/* <div className={style.input_box}>
        <form onSubmit={handleSearch} className={style.search_form}>
          <input
            type="text"
            placeholder="Search location"
            value={query} 
            onChange={
              (e) => {setQuery(e.target.value)
                 console.log("data enter in input : ",e.target.value);
              }
            }
            className={style.search_input}
          />
          <div className={style.icon}>
            <button type="submit" onClick={handleSearch2} className={style.search_button}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: 'rgb(136, 128, 128)' }}
              ></i>
            </button>
          </div>
        </form>
      </div> */}

      {/* Slider navigation buttons */}
      <div className={style.sliderButtons}>
        <button onClick={prevImage} className={style.prev}>
          &#8249;
        </button>
        <button onClick={nextImage} className={style.next}>
          &#8250;
        </button>
      </div>

  
    </div>
  );
}

export default Hero;
