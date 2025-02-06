import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
import shivjayanti from "../../Assets/shivjayanti.jpg";
import thirdImage from "../../Assets/homeImages/thirdImage.jpg";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";
import HealthHistory from "./HealthHistory";
const Health = () =>
{

    const images = [
      thirdImage,
        // shivjayanti21,
        // shivjayanti24, // the imported image
     
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // loop back to the first image
        }, 2000); // change image every 1 second
    
        return () => clearInterval(interval); // clean up the interval on component unmount
      }, [images.length]);





    return (
         <div>
        <Navbar/>

 <      div className="home-container">
 <      div>
          {/* Display the current image */}
          <img src={images[currentIndex]} alt="Slider" />
        </div>

        <HealthHistory/>
        </div>
        </div>
    )
}

export default Health;