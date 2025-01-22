import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import shivjayanti from "../../Assets/shivjayanti.jpg";
import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
import youthmentoring from "../../Assets/contributionImage/youth-mentoring.png";
import Slide from "../Slide";
import Font, { Text } from "react-font";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FoodDonationhistory.css";
const FoodDonationHistory = () => {
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
                Why Food Donation?
              </p>
              <div
                style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}
              >
                <p>
                  Food donation is a powerful way to combat hunger and ensure
                  that no one goes to bed hungry. It bridges the gap between
                  excess food and those in need, creating a more equitable and
                  compassionate society. Here’s why food donation is vital:
                </p>
                <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
                  <li>
                    <strong>Fighting Hunger:</strong> Millions of people face
                    food insecurity every day. Food donation provides immediate
                    relief to those struggling to meet their basic needs.
                  </li>
                  <li>
                    <strong>Reducing Food Waste:</strong> Donating surplus food
                    prevents it from going to waste, helping to conserve
                    resources and reduce the environmental impact of discarded
                    food.
                  </li>
                  <li>
                    <strong>Promoting Health and Nutrition:</strong> Access to
                    nutritious food is essential for physical and mental
                    well-being, especially for vulnerable populations such as
                    children and the elderly.
                  </li>
                  <li>
                    <strong>Building Community:</strong> Food donation fosters a
                    sense of empathy and solidarity, bringing communities
                    together to support those in need.
                  </li>
                  <li>
                    <strong>Creating a Sustainable Future:</strong> Responsible
                    food distribution ensures that resources are utilized
                    effectively, contributing to a more sustainable society.
                  </li>
                </ul>
                <p>
                  Through our food donation initiatives, we aim to feed the
                  hungry, reduce waste, and spread hope. Together, we can work
                  toward a world where everyone has access to nutritious meals
                  and the dignity they deserve.
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

export default FoodDonationHistory;
