import React, { useState, useEffect, useRef } from "react";
import ProfilePic1 from "../Assets/john-doe-image.png"; // Example image
import { AiFillStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import review1 from "../Assets/Review/review1.jpg";
import review2 from "../Assets/Review/review2.jpg";
const testimonialsData = [
  {
    name: "SP Shrikant Dhiware",
    text: "Sahkarya Pratisthan's dedication to education,healthcare, and environmental sustainability is truly commendable. Their impactful initiatives have significantly contributed to the well-being of our community. I am proud to support such a visionary organization.",
    image: review1,
  },
  {
    name: "Amita Patil",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: review2,
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null); // To keep track of the interval

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length // Loop back to the start
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length // Loop back to the end
    );
  };

  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Rotate every 3 seconds
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    // Start the auto rotation when the component mounts
    startAutoRotate();

    // Clear interval when the component unmounts
    return () => {
      stopAutoRotate();
    };
  }, []);

  useEffect(() => {
    if (!isHovering) {
      // Restart the auto rotation when hover ends
      startAutoRotate();
    } else {
      // Stop the auto rotation when hover starts
      stopAutoRotate();
    }
  }, [isHovering]); // Restart the interval when hover state changes

  const { name, text, image } = testimonialsData[currentIndex];

  return (
    <div
      className="work-section-wrapper"
      style={{ backgroundColor: "#fffaf0" }}
    >
      <div className="work-section-top">
        <div className="heading1 heading05">
          <h3>
            <span className="stories-of">Impactful</span>
            <span className="heading-font color-font5 signature-style">
              Words
            </span>
          </h3>
        </div>
      </div>
      <div
        className="testimonial-section-bottom"
        onMouseEnter={() => setIsHovering(true)} // Set hovering to true when mouse enters
        onMouseLeave={() => setIsHovering(false)} // Set hovering to false when mouse leaves
      >
        <img src={image} alt={name} className="reviewImage" />
        <h2>{text}</h2>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>{name}</h2>

        {/* Navigation buttons placed here */}
        <div className="testimonial-navigation">
          <button onClick={handlePrev}>
            <FaChevronLeft /> {/* Previous button */}
          </button>
          <button onClick={handleNext}>
            <FaChevronRight /> {/* Next button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
