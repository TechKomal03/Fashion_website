import React from 'react';

const Carousel = () => {
  return (
   <div className="container-fluid">
     <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/How_to_Wear_Designer_Indian_Ethnic_Wear_to_Look_Super_Classy_41d76fcf-5f32-4363-9bcc-b4a71aa6fad3 (1).webp" className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src="images/wear_banner.webp"  className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src="images/Mastering-Color-Schemes-In-Women_s-Clothing.webp" className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   </div>
  );
};

export default Carousel;
