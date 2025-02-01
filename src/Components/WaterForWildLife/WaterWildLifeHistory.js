// import shivjayanti from "../../Assets/shivjayanti.jpg";
// import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
// import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import youthmentoring from "../../Assets/contributionImage/youth-mentoring.png";
// import Slide from "../Slide";
// import Font, { Text } from "react-font";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Footer from "../Footer";
// import "./WaterForWildLife.css";
// const WaterWildLifeHistory = () => {
//   const navigate = useNavigate();
//   // Update workInfoData to have an array of images for each item
//   const workInfoData = [
//     {
//       images: [shivjayanti, shivjayanti21, shivjayanti24],
//       title: "Education",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: [shivjayanti21, shivjayanti, shivjayanti24],
//       title: "Medical Sector",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//   ];

//   const review = [
//     {
//       images: youthmentoring,
//       name: "Pravin Nikum",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: youthmentoring,
//       name: "Sharvari Satham",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: youthmentoring,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti24,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti21,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false, // Set this to false to hide the arrows
//   };

//   const [currentIndexes, setCurrentIndexes] = useState(
//     workInfoData.map(() => 0)
//   ); // Initialize currentIndexes array for each section

//   // Automatically cycle images for each section
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndexes((prevIndexes) =>
//         prevIndexes.map(
//           (index, sectionIndex) =>
//             (index + 1) % workInfoData[sectionIndex].images.length // Loop through images for each section
//         )
//       );
//     }, 1000); // Change image every second

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [workInfoData]);

//   //Display slides

//   const [showSlides, setShowSlides] = useState(false);
//   const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

//   const toggleSlides = () => {
//     setShowSlides((prev) => !prev);
//   };

//   const toggleUpcomingEvents = () => {
//     setShowUpcomingEvents((prev) => !prev);
//   };

//   const slidesData = [
//     { title: "Donation", description: "Donate Education kit for students" },
//     {
//       title: "Awareness",
//       description:
//         "Arrange Camp at village for encourage students for education",
//     },
//   ];

//   const upcomingEventsData = [
//     { title: "Event 1", description: "Details about Event 1" },
//     { title: "Event 2", description: "Details about Event 2" },
//     { title: "Event 3", description: "Details about Event 3" },
//   ];

//   return (
//     <div>
//       <div className="container">
//         <div className="work-section-wrapper">
//           <div className="container">
//             <div className="work-educationsection-top">
//               <p
//                 style={{
//                   fontSize: "40px",
//                   fontFamily: "Barlow Condensed",
//                   fontWeight: "1000",
//                   textAlign: "center",
//                   color: "black",
//                   marginBottom: "20px",
//                 }}
//               >
//                 Why Water for Wildlife?
//               </p>
//               <div
//                 style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}
//               >
//                 <p>
//                   Water is a fundamental necessity for all living beings, and
//                   its availability is vital for sustaining wildlife. As natural
//                   water sources dwindle due to climate change and human
//                   activities, providing water for wildlife has become an urgent
//                   priority. Here’s why this initiative is crucial:
//                 </p>
//                 <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
//                   <li>
//                     <strong>Preserving Biodiversity:</strong> Wildlife depends
//                     on water for survival, and ensuring access to it helps
//                     maintain ecosystems and protect diverse species.
//                   </li>
//                   <li>
//                     <strong>Mitigating Habitat Loss:</strong> Shrinking water
//                     sources force animals to migrate, often leading to conflict
//                     or endangering their survival. Providing water ensures they
//                     remain in their natural habitats.
//                   </li>
//                   <li>
//                     <strong>Supporting Ecosystem Balance:</strong> Healthy
//                     wildlife populations contribute to balanced ecosystems,
//                     which in turn support agricultural productivity, clean air,
//                     and water quality.
//                   </li>
//                   <li>
//                     <strong>Combating Climate Challenges:</strong> Rising
//                     temperatures and changing weather patterns have made it
//                     harder for wildlife to find water. Initiatives to create
//                     water sources offer relief and resilience.
//                   </li>
//                   <li>
//                     <strong>Promoting Coexistence:</strong> Ensuring adequate
//                     water resources for wildlife reduces the risk of animals
//                     venturing into human settlements in search of water,
//                     fostering harmony between humans and nature.
//                   </li>
//                 </ul>
//                 <p>
//                   Our water for wildlife initiatives aim to address these
//                   challenges by creating sustainable water sources, raising
//                   awareness, and protecting natural habitats. Together, we can
//                   ensure that wildlife continues to thrive and contribute to a
//                   balanced and flourishing environment.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="work-info">
//           {workInfoData.map((item, index) => (
//             <div className="row-sub-projects" key={index}>
//               <div className="image">
//                 {/* Only the image will slide */}
//                 <img
//                   src={item.images[currentIndexes[index]]} // Display the current image for this section
//                   alt={item.title}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="detail">
//                 <div className="content">
//                   <h5>{item.title}</h5>
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="container">
//         <div className="heading1 heading05">
//           <h3>
//             <span className="stories-of">STORIES OF</span>
//             <span className="heading-font color-font5 signature-style">
//               Change
//             </span>
//           </h3>
//         </div>
//         <div className="w-3/4 m-auto">
//           <div className="mt-4">
//             <Slider {...settings}>
//               {review.map((d, index) => (
//                 <div className="education-card" key={index}>
//                   <div className="education-card-header">
//                     <img
//                       src={d.images}
//                       alt={d.name}
//                       className="h-44 w-44 rounded-full"
//                     />
//                   </div>
//                   <div className="education-card-content">
//                     <p className="education-card-name">{d.name}</p>
//                     <p>{d.review}</p>
//                     <button className="education-card-button">Read More</button>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="app">
//           <div onClick={toggleSlides} className="event-toggle">
//             How We Provide Education Facility
//             <span className="arrow">
//               {showSlides ? " ▲" : " ▼"}{" "}
//               {/* Change arrow direction based on state */}
//             </span>
//           </div>

//           {showSlides && (
//             <div className="slides-container">
//               {slidesData.map((slide, index) => (
//                 <Slide
//                   key={index}
//                   title={slide.title}
//                   description={slide.description}
//                 />
//               ))}
//             </div>
//           )}

//           <div onClick={toggleUpcomingEvents} className="event-toggle">
//             Upcoming Events
//             <span className="arrow">
//               {showUpcomingEvents ? " ▲" : " ▼"}{" "}
//               {/* Change arrow direction based on state */}
//             </span>
//           </div>

//           {showUpcomingEvents && (
//             <div className="slides-container">
//               {upcomingEventsData.map((event, index) => (
//                 <Slide
//                   key={index}
//                   title={event.title}
//                   description={event.description}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default WaterWildLifeHistory;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Footer";
// import shivjayanti from "../../Assets/shivjayanti.jpg";
// import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
// import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
// import youthmentoring from "../../Assets/contributionImage/youth-mentoring.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slide from "../Slide";
// import "./TreePlantationDepartment.css";
// import Font, { Text } from "react-font";
// const TreePlantationhistory = () => {
//   const navigate = useNavigate();

//   // Update workInfoData to have an array of images for each item
//   const workInfoData = [
//     {
//       images: [shivjayanti, shivjayanti21, shivjayanti24],
//       title: "Education",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: [shivjayanti21, shivjayanti, shivjayanti24],
//       title: "Medical Sector",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//     {
//       images: [shivjayanti24, shivjayanti, shivjayanti21],
//       title: "Tree Plantation",
//       text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
//     },
//   ];

//   const review = [
//     {
//       images: youthmentoring,
//       name: "Pravin Nikum",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: youthmentoring,
//       name: "Sharvari Satham",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: youthmentoring,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti24,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti21,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//     {
//       images: shivjayanti,
//       name: "Mayur Koli",
//       review:
//         "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false, // Set this to false to hide the arrows
//   };

//   const [currentIndexes, setCurrentIndexes] = useState(
//     workInfoData.map(() => 0)
//   ); // Initialize currentIndexes array for each section

//   // Automatically cycle images for each section
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndexes((prevIndexes) =>
//         prevIndexes.map(
//           (index, sectionIndex) =>
//             (index + 1) % workInfoData[sectionIndex].images.length // Loop through images for each section
//         )
//       );
//     }, 1000); // Change image every second

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [workInfoData]);

//   //Display slides

//   const [showSlides, setShowSlides] = useState(false);
//   const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

//   const toggleSlides = () => {
//     setShowSlides((prev) => !prev);
//   };

//   const toggleUpcomingEvents = () => {
//     setShowUpcomingEvents((prev) => !prev);
//   };

//   const slidesData = [
//     { title: "Donation", description: "Donate Education kit for students" },
//     {
//       title: "Awareness",
//       description:
//         "Arrange Camp at village for encourage students for education",
//     },
//   ];

//   const upcomingEventsData = [
//     { title: "Event 1", description: "Details about Event 1" },
//     { title: "Event 2", description: "Details about Event 2" },
//     { title: "Event 3", description: "Details about Event 3" },
//   ];

//   return (
//     <div>
//       <div className="container">
//         <div className="work-section-wrapper">
//           <div className="container">
//             <div className="work-educationsection-top">
//               <p
//                 style={{
//                   fontSize: "40px",
//                   fontFamily: "Barlow Condensed",
//                   fontWeight: "1000",
//                   textAlign: "center",
//                   color: "black",
//                   marginBottom: "20px",
//                 }}
//               >
//                 Why Tree Plantation?
//               </p>
//               <div
//                 style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}
//               >
//                 <p>
//                   Tree plantation is essential for preserving our environment
//                   and ensuring a sustainable future. Trees play a vital role in
//                   combating climate change, enhancing biodiversity, and
//                   improving the quality of life for all living beings. Here’s
//                   why tree plantation is crucial:
//                 </p>
//                 <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
//                   <li>
//                     <strong>Combating Climate Change:</strong> Trees absorb
//                     carbon dioxide and release oxygen, helping to mitigate the
//                     effects of global warming.
//                   </li>
//                   <li>
//                     <strong>Protecting Biodiversity:</strong> Forests provide
//                     habitats for countless species of plants, animals, and
//                     microorganisms, ensuring ecological balance.
//                   </li>
//                   <li>
//                     <strong>Improving Air Quality:</strong> Trees filter
//                     pollutants from the air, reducing the impact of urban
//                     pollution and promoting healthier living conditions.
//                   </li>
//                   <li>
//                     <strong>Preventing Soil Erosion:</strong> Tree roots bind
//                     the soil, reducing the risk of erosion and maintaining land
//                     fertility.
//                   </li>
//                   <li>
//                     <strong>Enhancing Well-Being:</strong> Green spaces improve
//                     mental health, reduce stress, and create serene environments
//                     for communities.
//                   </li>
//                 </ul>
//                 <p>
//                   Through our tree plantation initiatives, we aim to restore
//                   degraded ecosystems, raise awareness about environmental
//                   conservation, and create greener communities. Together, let’s
//                   plant trees today for a healthier, greener tomorrow.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="work-info">
//           {workInfoData.map((item, index) => (
//             <div className="row-sub-projects" key={index}>
//               <div className="image">
//                 {/* Only the image will slide */}
//                 <img
//                   src={item.images[currentIndexes[index]]} // Display the current image for this section
//                   alt={item.title}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="detail">
//                 <div className="content">
//                   <h5>{item.title}</h5>
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="container">
//         <div className="heading1 heading05">
//           <h3>
//             <span className="stories-of">STORIES OF</span>
//             <span className="heading-font color-font5 signature-style">
//               Change
//             </span>
//           </h3>
//         </div>
//         <div className="w-3/4 m-auto">
//           <div className="mt-4">
//             <Slider {...settings}>
//               {review.map((d, index) => (
//                 <div className="education-card" key={index}>
//                   <div className="education-card-header">
//                     <img
//                       src={d.images}
//                       alt={d.name}
//                       className="h-44 w-44 rounded-full"
//                     />
//                   </div>
//                   <div className="education-card-content">
//                     <p className="education-card-name">{d.name}</p>
//                     <p>{d.review}</p>
//                     <button className="education-card-button">Read More</button>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="app">
//           <div onClick={toggleSlides} className="event-toggle">
//             How We Provide Education Facility
//             <span className="arrow">
//               {showSlides ? " ▲" : " ▼"}{" "}
//               {/* Change arrow direction based on state */}
//             </span>
//           </div>

//           {showSlides && (
//             <div className="slides-container">
//               {slidesData.map((slide, index) => (
//                 <Slide
//                   key={index}
//                   title={slide.title}
//                   description={slide.description}
//                 />
//               ))}
//             </div>
//           )}

//           <div onClick={toggleUpcomingEvents} className="event-toggle">
//             Upcoming Events
//             <span className="arrow">
//               {showUpcomingEvents ? " ▲" : " ▼"}{" "}
//               {/* Change arrow direction based on state */}
//             </span>
//           </div>

//           {showUpcomingEvents && (
//             <div className="slides-container">
//               {upcomingEventsData.map((event, index) => (
//                 <Slide
//                   key={index}
//                   title={event.title}
//                   description={event.description}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default TreePlantationhistory;

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./WaterForWildLife.css";
import Footer from "../Footer";
import firstImage from "../../Assets/Education/storiesOfChange/firstImage.jpg";
import secondImage from "../../Assets/Education/storiesOfChange/secondImage.jpg";
import thirdImage from "../../Assets/Education/storiesOfChange/thirdImage.jpg";
import fourthImage from "../../Assets/Education/storiesOfChange/fourthImage.jpg";
import fifthImage from "../../Assets/Education/storiesOfChange/fifthImage.jpg";
import sixthImage from "../../Assets/Education/storiesOfChange/sixthImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import education1 from "../../Assets/Education/firstSlide/education1.jpg";
import education2 from "../../Assets/Education/firstSlide/education2.jpg";
import education3 from "../../Assets/Education/firstSlide/education3.jpg";
import education4 from "../../Assets/Education/firstSlide/education4.jpg";
import education5 from "../../Assets/Education/firstSlide/education5.jpg";
import education6 from "../../Assets/Education/firstSlide/education6.jpg";
import education7 from "../../Assets/Education/firstSlide/education7.jpg";
import education8 from "../../Assets/Education/firstSlide/education8.jpg";
import education9 from "../../Assets/Education/firstSlide/education9.jpg";
import education10 from "../../Assets/Education/firstSlide/education10.jpg";
import education11 from "../../Assets/Education/secondSlide/education11.jpg";
import education12 from "../../Assets/Education/secondSlide/education12.jpg";
import education13 from "../../Assets/Education/secondSlide/education13.jpg";
import education14 from "../../Assets/Education/secondSlide/education14.jpg";
import education15 from "../../Assets/Education/secondSlide/education15.jpg";
import education16 from "../../Assets/Education/secondSlide/education16.jpg";
import education17 from "../../Assets/Education/secondSlide/education17.jpg";
import education18 from "../../Assets/Education/secondSlide/education18.jpg";
import education19 from "../../Assets/Education/secondSlide/education19.jpg";
import education20 from "../../Assets/Education/secondSlide/education20.jpg";
import education21 from "../../Assets/Education/thirdSlide/education21.jpg";
import education22 from "../../Assets/Education/thirdSlide/education22.jpg";
import education23 from "../../Assets/Education/thirdSlide/education23.jpg";
import education24 from "../../Assets/Education/thirdSlide/education24.jpg";
import education31 from "../../Assets/Education/fourthSlide/education31.jpg";
import education32 from "../../Assets/Education/fourthSlide/education32.jpg";
import education33 from "../../Assets/Education/fourthSlide/education33.jpg";
import education34 from "../../Assets/Education/fourthSlide/education34.jpg";
import education35 from "../../Assets/Education/fourthSlide/education35.jpg";
import education36 from "../../Assets/Education/fourthSlide/education36.jpg";
import education37 from "../../Assets/Education/fourthSlide/education37.jpg";
import education38 from "../../Assets/Education/fourthSlide/education38.jpg";
import education39 from "../../Assets/Education/fourthSlide/education39.jpg";
import education40 from "../../Assets/Education/fourthSlide/education40.jpg";
import education41 from "../../Assets/Education/fifthSlide/education41.jpg";
import education42 from "../../Assets/Education/fifthSlide/education42.jpg";
import education43 from "../../Assets/Education/fifthSlide/education43.jpg";
import education44 from "../../Assets/Education/fifthSlide/education44.jpg";
import education45 from "../../Assets/Education/fifthSlide/education45.jpg";
import education46 from "../../Assets/Education/fifthSlide/education46.jpg";

const WaterWildLifeHistory = () => {
  const navigate = useNavigate();

  const workInfoData = [
    {
      images: [
        education1,
        education2,
        education3,
        education4,
        education5,
        education6,
        education7,
        education8,
        education9,
        education10,
      ],
      title: "Shivaji Maratha Bording School,Dhule (19 Feb 2022)",
      text: "On the special occasion of Shiv Jayanti, our team at Sahkarya Pratisthan took a heartfelt initiative to inspire and support the young minds at the Shivaji Maratha Boarding School. Recognizing the challenges faced by the 60 orphaned students, we donated school bags to provide them with essential educational tools. Additionally, we organized a comprehensive medical camp to address their healthcare needs and ensure their well-being. This initiative aimed to motivate these children, instill hope, and empower them through education and good health. The event stood as a tribute to Chhatrapati Shivaji Maharaj's vision of uplifting the underprivileged and fostering a brighter future for all.",
    },
    {
      images: [
        education11,
        education12,
        education13,
        education14,
        education15,
        education16,
        education17,
        education18,
        education19,
        education20,
      ],
      title: "Kamlabai Girls High School,Dhule (19 Feb 2023)",
      text: "On the auspicious occasion of Shiv Jayanti, Sahkarya Pratisthan extended its support to the young girls at Kamlabai Girls High School in Dhule. Understanding the challenges faced by orphaned students, we donated 80 school bags and notebooks to empower their educational journey. This initiative was driven by our commitment to providing equal opportunities for education and growth. Through this gesture, we aimed to inspire these young girls to pursue their dreams and honor the legacy of Chhatrapati Shivaji Maharaj, who championed the cause of upliftment and empowerment for all. ",
    },
    {
      images: [education21, education22, education23, education24],
      title: "Shree Sanskar Matimand School,Dhule (4 Jun 2023)",
      text: "At Shree Sanskar Matimand School, an institution dedicated to the education of blind and specially-abled girls, Sahkarya Pratisthan extended its support by donating essential educational equipment. Additionally, we organized a workshop aimed at enhancing their future educational opportunities and personal development. This initiative was undertaken to empower these young girls, helping them overcome challenges and unlock their true potential. Guided by our mission of inclusivity and education for all, we are proud to contribute to shaping a brighter future for these remarkable students.",
    },
    {
      images: [
        education31,
        education32,
        education33,
        education34,
        education35,
        education36,
        education37,
        education38,
        education39,
        education40,
      ],
      title: "Blind Boys & Girls School,Dhule (19 Feb 2024)",
      text: "On 19th February 2024, our NGO had the privilege of supporting the Blind Boys & Girls School in Dhule by donating school uniforms and talking watches to the students. These donations aim to empower visually impaired children, providing them with tools to foster independence and confidence in their daily lives.The event was graced by the presence of Dhule SP, Shri Shrikant Dhivare, who honored us with his valuable time and support. This initiative reflects our continued commitment to the education and well-being of differently-abled students, helping them overcome challenges and achieve their dreams.",
    },
    {
      images: [
        education41,
        education42,
        education43,
        education44,
        education45,
        education46,
      ],
      title: "Anand Vihar Ashram,Dhule (15 Oct 2024)",
      text: "On 15th September 2024, our NGO organized a heartfelt program at Anand Vihar Ashram, Dhule, to support 55 orphaned students by donating school bags. This initiative was arranged to commemorate the spirit of Independence Day, fostering a sense of encouragement and empowerment among these young minds.The program aimed to inspire the children to pursue their education with enthusiasm and confidence, symbolizing our dedication to their holistic development. This small gesture is a step towards ensuring that every child has the tools they need to succeed and contribute positively to society.",
    },
  ];

  const reviewData = [
    {
      images: firstImage,
      name: "Pratik jagdale",
      review:
        "Sahkarya Pratisthan has truly transformed my life. They encouraged me to pursue my education and supported me with the essentials I needed to continue learning. Even a small amount of their help has made a huge difference in shaping my future.",
    },
    {
      images: secondImage,
      name: "Mohini Chaudhari",
      review:
        "I am deeply grateful to Sahkarya Pratisthan for changing my life. Their encouragement toward education and the provision of essential supplies have given me the confidence to move forward. Even the little support I receive from them has a meaningful impact on my journey.",
    },
    {
      images: thirdImage,
      name: "Nikita",
      review:
        "Thanks to Sahkarya Pratisthan, my life has taken a positive turn. Their motivation for me to focus on education, along with the essential supplies they provide, has made a significant difference. Even a small amount of support from them has helped me progress toward my goals.",
    },
    {
      images: fourthImage,
      name: " Mina Patil",
      review:
        "Sahkarya Pratisthan has been a beacon of hope in my life. Their unwavering support and encouragement have inspired me to pursue education with determination. By providing the necessary resources and essentials, they have given me the tools to grow and achieve my dreams. Even their smallest gesture of support has had a profound impact on my journey.",
    },
    {
      images: fifthImage,
      name: "Chaitali",
      review:
        "My life has improved significantly thanks to Sahkarya Pratisthan. They empowered me to believe in the power of education and ensured I had the resources needed to stay on track. Their thoughtful support, no matter how small, has opened doors to opportunities I never thought possible and has brought me closer to realizing my potential.",
    },
    {
      images: sixthImage,
      name: "Mayur Wankhede",
      review:
        "I owe a great deal of gratitude to Sahkarya Pratisthan for changing my life. They not only encouraged me to prioritize my education but also provided the essentials to support my journey. Their consistent care and even the smallest support have given me the confidence to move forward and create a brighter future for myself.",
    },
  ];

  return (
    <>
      <div className="health-history-container">
        {/* Why We Focus on Health */}
        <div className="why-health-section">
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
            Why Water for Wild life?
          </p>
          <p>
            Water is a fundamental necessity for all living beings, and its
            availability is vital for sustaining wildlife. As natural water
            sources dwindle due to climate change and human activities,
            providing water for wildlife has become an urgent priority. Here’s
            why this initiative is crucial:
          </p>
          <ul>
            <li>
              <strong>Preserving Biodiversity:</strong> Wildlife depends on
              water for survival, and ensuring access to it helps maintain
              ecosystems and protect diverse species.
            </li>
            <li>
              <strong>Mitigating Habitat Loss:</strong> Shrinking water sources
              force animals to migrate, often leading to conflict or endangering
              their survival. Providing water ensures they remain in their
              natural habitats.
            </li>
            <li>
              <strong>Supporting Ecosystem Balance:</strong> Healthy wildlife
              populations contribute to balanced ecosystems, which in turn
              support agricultural productivity, clean air, and water quality.
            </li>
            <li>
              <strong>Combating Climate Challenges:</strong> Rising temperatures
              and changing weather patterns have made it harder for wildlife to
              find water. Initiatives to create water sources offer relief and
              resilience.
            </li>
            <li>
              <strong>Promoting Coexistence:</strong> Ensuring adequate water
              resources for wildlife reduces the risk of animals venturing into
              human settlements in search of water, fostering harmony between
              humans and nature.
            </li>
          </ul>
          <p>
            Our water for wildlife initiatives aim to address these challenges
            by creating sustainable water sources, raising awareness, and
            protecting natural habitats. Together, we can ensure that wildlife
            continues to thrive and contribute to a balanced and flourishing
            environment.
          </p>
        </div>

        <div className="heading1 heading05">
          <h3>
            <span className="stories-of">STORIES OF</span>
            <span className="heading-font color-font5 signature-style">
              Events
            </span>
          </h3>
        </div>

        {workInfoData.map((item, index) => (
          <div className="work-section" key={index}>
            <h2 className="work-title">{item.title}</h2>
            <p className="work-text">{item.text}</p>
            <Slider
              className="image-slider"
              dots={true}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
            >
              {item.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={image}
                    alt={`Slide ${imgIndex}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}

        {/* <h2 className="section-title">Testimonials</h2> */}

        <div className="heading1 heading05">
          <h3>
            <span className="stories-of">STORIES OF</span>
            <span className="heading-font color-font5 signature-style">
              Change
            </span>
          </h3>
        </div>

        <div className="reviews">
          {reviewData.map((item, index) => (
            <div className="review-card" key={index}>
              <img src={item.image} alt={item.name} className="review-image" />
              <h3 className="review-name">{item.name}</h3>
              <p className="review-text">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaterWildLifeHistory;
