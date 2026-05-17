import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
import shivjayanti from "../../Assets/shivjayanti.jpg";
import firstImage from "../../Assets/homeImages/firstImage.jpg";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ExtraActivityHistory from "./ExtraActivityHistory";
import video from "../../Assets/ExtraActivity/Videos/ExtraActivityVideo.mp4";
const ExtraActivities = () => {
  const images = [
    firstImage,
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
      <Navbar />

      <div className="home-container">
        <div>
          {/* Display the current image */}
          <img src={images[currentIndex]} alt="Slider" />
        </div>
        <style>
          {`
              .video-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  margin-top: 20px; /* Add space from the top */
              }

              .home-video {
                  width: 500px; /* Set a fixed width */
                  height: 600px; /* Maintain 16:9 aspect ratio */
                  border-radius: 10px; /* Smooth rounded corners */
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Nice shadow */
                  border: 3px solid #ccc; /* Soft border */
                  object-fit: cover; /* Keeps video content properly scaled */
              }
              `}
        </style>
        <div className="video-container">
          <video
            src={video}
            controls
            loop
            muted
            autoPlay
            className="home-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <ExtraActivityHistory />
      </div>
    </div>
  );
};

export default ExtraActivities;
