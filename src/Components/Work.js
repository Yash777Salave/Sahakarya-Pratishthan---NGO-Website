import React from "react";
import youthmentoring from "../Assets/contributionImage/youth-mentoring.png";
import doctors from "../Assets/contributionImage/doctors.jpg";
import childlogo from "../Assets/child-edu.jpg";
import treePlantation from "../Assets/contributionImage/Treeplantation.jpg";
import animals from "../Assets/contributionImage/animals.jpg";
import donateFood from "../Assets/contributionImage/donateFood.jpg";
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import fourthImage from "../Assets/homeImages/fourthImage.jpg";

const Work = () => {

  const navigate = useNavigate();

  const workInfoData = [
    {
      image: youthmentoring,
      title: "Education",
      text: "",
      route: "/education",
    },
    {
      image: doctors,
      title: "Medical Sector",
      text: "",
      route: "/health",
    },
    {
      image: treePlantation,
      title: "Tree Plantation",
      text: "",
      route: "/treeplantation",
    },

    {
      image: animals,
      title: "Water For Wildlife",
      text: "",
      route: "/waterwildlife",
    },

    {
      image: donateFood,
      title: "Donate Food",
      text: "",
      route: "/foodDonation",
    },

    {
      image: donateFood,
      title: "Extra Activities",
      text: "",
      route: "/extraActivity",
    },

  ];

  const handleImageClick = (route) => {
    console.log("Navigating to:", route);
    navigate(route); // Redirect to the route on image click
  };



  return (
    <>
      <div className="work-section-wrapper pt-5 pb-5">
        <div className="container">
        <div className="work-section-top">
        <div className="heading1 heading05">
        <h3>
 
      <span style={{ marginRight: "10px" }}>OUR</span>
  <span style={{ marginLeft: "10px" ,textDecoration: "underline" }} className="heading-font color-font5 signature-style">
    Impact
  </span>
                    </h3>
                    <br/>
                </div>
      </div>
          <div className="grid-container">

            <div className="count-box">
              <span style={{ color: 'orange' }}>
                <CountUp end={678} duration={5} />+
              </span>
              <h3>Education-Milestones</h3>
              
            </div>

            <div className="count-box">
              <span style={{ color: 'orange' }}>
                <CountUp end={15000} duration={5} />+
              </span>
              <h3>Medical Aid Provided</h3>
            </div>

            <div className="count-box">
              <span style={{ color: 'orange' }}>
                <CountUp end={1300} duration={5} />+
              </span>
              <h3>Trees-Planted</h3>
            </div>

          </div>
        </div>
      </div> {/* End of work-section-wrapper */}
     
      <div className="heading1 heading05">
        <h3>
 
      <span style={{ marginRight: "10px" , fontSize: "30px"}}>THE Way We Work</span>
  <span style={{ marginLeft: "10px" ,textDecoration: "underline" }} className="heading-font color-font5 signature-style">
  
  </span>
                    </h3>
                    <br/>
                </div>
     <div className="imageSection">
     <img src={fourthImage} />
     </div>
      <div className="work-section">
      <div className="work-section-top">
        <h3>Our-Contributions
        </h3> 
      </div>
        <div className="container mt-3">
          <div className="grid-container">
            {workInfoData.map((data) => (
              <div
                className="outer-box"
                key={data.title}
                onClick={() => handleImageClick(data.route)} // Add click handler for redirection
                style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
              >
                <div className="info-boxes-img-container">
                  <img src={data.image} alt={data.title} />
                </div>
                <h3>
  {data.title}
</h3>

                <p style={{ textAlign: 'center' }}>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div> {/* End of work-section */}
    </>
  );
};

export default Work;