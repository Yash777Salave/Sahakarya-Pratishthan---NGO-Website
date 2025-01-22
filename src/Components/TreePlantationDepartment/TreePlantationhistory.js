import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import shivjayanti from "../../Assets/shivjayanti.jpg";
import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
import youthmentoring from "../../Assets/contributionImage/youth-mentoring.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../Slide";
import "./TreePlantationDepartment.css";
import Font, { Text } from "react-font";
const TreePlantationhistory = () => {
  const navigate = useNavigate();

  // Update workInfoData to have an array of images for each item
  const workInfoData = [
    {
      images: [shivjayanti, shivjayanti21, shivjayanti24],
      title: "Education",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: [shivjayanti21, shivjayanti, shivjayanti24],
      title: "Medical Sector",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      images: [shivjayanti24, shivjayanti, shivjayanti21],
      title: "Tree Plantation",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      images: [shivjayanti24, shivjayanti, shivjayanti21],
      title: "Tree Plantation",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      images: [shivjayanti24, shivjayanti, shivjayanti21],
      title: "Tree Plantation",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  const review = [
    {
      images: youthmentoring,
      name: "Pravin Nikum",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: youthmentoring,
      name: "Sharvari Satham",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: youthmentoring,
      name: "Mayur Koli",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: shivjayanti24,
      name: "Mayur Koli",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: shivjayanti21,
      name: "Mayur Koli",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      images: shivjayanti,
      name: "Mayur Koli",
      review:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // Set this to false to hide the arrows
  };

  const [currentIndexes, setCurrentIndexes] = useState(
    workInfoData.map(() => 0)
  ); // Initialize currentIndexes array for each section

  // Automatically cycle images for each section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map(
          (index, sectionIndex) =>
            (index + 1) % workInfoData[sectionIndex].images.length // Loop through images for each section
        )
      );
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [workInfoData]);

  //Display slides

  const [showSlides, setShowSlides] = useState(false);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

  const toggleSlides = () => {
    setShowSlides((prev) => !prev);
  };

  const toggleUpcomingEvents = () => {
    setShowUpcomingEvents((prev) => !prev);
  };

  const slidesData = [
    { title: "Donation", description: "Donate Education kit for students" },
    {
      title: "Awareness",
      description:
        "Arrange Camp at village for encourage students for education",
    },
  ];

  const upcomingEventsData = [
    { title: "Event 1", description: "Details about Event 1" },
    { title: "Event 2", description: "Details about Event 2" },
    { title: "Event 3", description: "Details about Event 3" },
  ];

  return (
    <div>
      <div className="container">
        <div className="work-section-wrapper">
          <div className="container">
            <div className="work-educationsection-top">
              <p
                style={{
                  fontSize: "40px",
                  fontFamily: "Barlow Condensed",
                  fontWeight: "1000",
                  textAlign: "center",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                Why Tree Plantation?
              </p>
              <div
                style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}
              >
                <p>
                  Tree plantation is essential for preserving our environment
                  and ensuring a sustainable future. Trees play a vital role in
                  combating climate change, enhancing biodiversity, and
                  improving the quality of life for all living beings. Here’s
                  why tree plantation is crucial:
                </p>
                <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
                  <li>
                    <strong>Combating Climate Change:</strong> Trees absorb
                    carbon dioxide and release oxygen, helping to mitigate the
                    effects of global warming.
                  </li>
                  <li>
                    <strong>Protecting Biodiversity:</strong> Forests provide
                    habitats for countless species of plants, animals, and
                    microorganisms, ensuring ecological balance.
                  </li>
                  <li>
                    <strong>Improving Air Quality:</strong> Trees filter
                    pollutants from the air, reducing the impact of urban
                    pollution and promoting healthier living conditions.
                  </li>
                  <li>
                    <strong>Preventing Soil Erosion:</strong> Tree roots bind
                    the soil, reducing the risk of erosion and maintaining land
                    fertility.
                  </li>
                  <li>
                    <strong>Enhancing Well-Being:</strong> Green spaces improve
                    mental health, reduce stress, and create serene environments
                    for communities.
                  </li>
                </ul>
                <p>
                  Through our tree plantation initiatives, we aim to restore
                  degraded ecosystems, raise awareness about environmental
                  conservation, and create greener communities. Together, let’s
                  plant trees today for a healthier, greener tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="work-info">
          {workInfoData.map((item, index) => (
            <div className="row-sub-projects" key={index}>
              <div className="image">
                {/* Only the image will slide */}
                <img
                  src={item.images[currentIndexes[index]]} // Display the current image for this section
                  alt={item.title}
                  className="img-fluid"
                />
              </div>
              <div className="detail">
                <div className="content">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="heading1 heading05">
          <h3>
            <span className="stories-of">STORIES OF</span>
            <span className="heading-font color-font5 signature-style">
              Change
            </span>
          </h3>
        </div>
        <div className="w-3/4 m-auto">
          <div className="mt-4">
            <Slider {...settings}>
              {review.map((d, index) => (
                <div className="education-card" key={index}>
                  <div className="education-card-header">
                    <img
                      src={d.images}
                      alt={d.name}
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="education-card-content">
                    <p className="education-card-name">{d.name}</p>
                    <p>{d.review}</p>
                    <button className="education-card-button">Read More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="app">
          <div onClick={toggleSlides} className="event-toggle">
            How We Provide Education Facility
            <span className="arrow">
              {showSlides ? " ▲" : " ▼"}{" "}
              {/* Change arrow direction based on state */}
            </span>
          </div>

          {showSlides && (
            <div className="slides-container">
              {slidesData.map((slide, index) => (
                <Slide
                  key={index}
                  title={slide.title}
                  description={slide.description}
                />
              ))}
            </div>
          )}

          <div onClick={toggleUpcomingEvents} className="event-toggle">
            Upcoming Events
            <span className="arrow">
              {showUpcomingEvents ? " ▲" : " ▼"}{" "}
              {/* Change arrow direction based on state */}
            </span>
          </div>

          {showUpcomingEvents && (
            <div className="slides-container">
              {upcomingEventsData.map((event, index) => (
                <Slide
                  key={index}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TreePlantationhistory;
