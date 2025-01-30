import Navbar from "../Navbar";
import shivjayanti from "../../Assets/shivjayanti.jpg";
import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
import Work from "../Work";
import Educationhistory from "./Educationhistory";
import educationfirst from "../../Assets/Education/SliderImage/eudcationfirst.jpg";
import { useState, useEffect } from "react";
const Education = () => {
  const images = [educationfirst];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // loop back to the first image
    }, 4000); // change image every 1 second

    return () => clearInterval(interval); // clean up the interval on component unmount
  }, [images.length]);

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div>
          {/* Display the current image */}
          <img src={images[currentIndex]} alt="Slider" />
        </div>

        <Educationhistory />
      </div>
    </div>
  );
};

export default Education;
