import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules'; 
import './property.css';


function Property() {
  const navigation = useNavigate();
  const properties = [
    {
      id: 1,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-1.jpg",
      title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      area: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30,
    },
    {
      id: 2,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-2.jpg",
      title: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      area: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30,
    },
    {
      id: 3,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-3.jpg",
      title: "3723 SANDBAR DR, Addis, LA 70710, USA",
      area: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30,
    },
    {
      id: 4,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-4.jpg",
      title: "Lot 21 Royal Oak Dr, Prairieville, LA 70769, USA",
      area: "7500sqf",
      beds: 5,
      baths: 3,
      price: "$7000",
      rating: 4.8,
      reviews: 45,
    },
    {
      id: 5,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-5.jpg",
      title: "710 Boyd Dr, Unit #1102, Baton Rouge, LA 70808, USA",
      area: "9000sqf",
      beds: 3,
      baths: 3,
      price: "$3000",
      rating: 4.5,
      reviews: 25,
    },
    {
      id: 6,
      image: "https://codewithsadee.github.io/realvine/assets/images/property-6.jpg",
      title: "5133 Mclain Way, Baton Rouge, LA 70809, USA",
      area: "8200sqf",
      beds: 4,
      baths: 2,
      price: "$4500",
      rating: 4.9,
      reviews: 35,
    },
  ];

  return (
    <section className="section property" aria-label="property">
      <div className="container">
        <h2 className="h2 section-titles">Featured Properties</h2>
        <p className="section-text">
          A great platform to buy, sell, and rent your properties without any agent or commissions.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} 
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          breakpoints={{
           
            768: {
              slidesPerView: 1, 
            },
           
            1024: {
              slidesPerView: 2, 
            },
            
            1200: {
              slidesPerView: 3, 
            },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="property-card" onClick={()=>{ navigation(`/property/${property.id}`)}}>
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 800, "--height": 533 }}
                >
                  <img
                    src={property.image}
                    width="800"
                    height="533"
                    loading="lazy"
                    alt={property.title}
                    className="img-cover"
                  />
                </figure>
                <button className="card-action-btn" aria-label="add to favourite">
                  <span>❤️</span>
                </button>
                <div className="card-content">
                  <h3 className="h3">
                    <Link to={`/property/${property.id}`} className="card-title">
                      {property.title}
                    </Link>
                  </h3>
                  <ul className="card-list">
                    <li className="card-item">
                      <div className="item-icon">
                        <ion-icon name="cube-outline"></ion-icon>
                      </div>
                      <span className="item-text">{property.area}</span>
                    </li>
                    <li className="card-item">
                      <div className="item-icon">
                        <ion-icon name="bed-outline"></ion-icon>
                      </div>
                      <span className="item-text">{property.beds} Beds</span>
                    </li>
                    <li className="card-item">
                      <div className="item-icon">
                        <ion-icon name="man-outline"></ion-icon>
                      </div>
                      <span className="item-text">{property.baths} Baths</span>
                    </li>
                  </ul>
                  <div className="card-meta">
                    <div>
                      <span className="meta-title">Price</span>
                      <span className="meta-text">{property.price}</span>
                    </div>
                    <div>
                      <span className="meta-title">Rating</span>
                      <span className="meta-text">
                        <div className="rating-wrapper">
                          {[...Array(5)].map((_, index) => (
                            <ion-icon
                              key={index}
                              name={index < property.rating ? "star" : "star-outline"}
                            ></ion-icon>
                          ))}
                        </div>
                        <span>{property.rating} ({property.reviews})</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h5 className='h5'> <button onClick={()=>{
        navigation('/seProperty');
      }} className="buttonMore"> See more.. </button>  </h5>
    </section>
  );
}

export default Property;
