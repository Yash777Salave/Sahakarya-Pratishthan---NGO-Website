import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import doctors from "../Assets/contributionImage/doctors.jpg";
import treePlantation from "../Assets/contributionImage/Treeplantation.jpg";
import shivjayanti from "../Assets/shivjayanti.jpg";
import shivjayanti21 from "../Assets/shivjayanti21.jpg";
import shivjayanti24 from "../Assets/shivjayanti24.jpg";
import firstImage from "../Assets/homeImages/firstImage.jpg";
import secondImage from "../Assets/homeImages/secondImage.jpg";
import thirdImage from "../Assets/homeImages/thirdImage.jpg";

const Home = () => {
  // Use the actual imported image variables
  const images = [
    firstImage, // the imported image
    secondImage,
    thirdImage
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // loop back to the first image
    }, 2000); // change image every 1 second

    return () => clearInterval(interval); // clean up the interval on component unmount
  }, [images.length]);

  return (
      
      <div className="home-banner-container">
        <div className="">
          {/* Display the current image */}
          <img src={images[currentIndex]} alt="Slider" />
        </div>
      </div>
  );
};

export default Home;
