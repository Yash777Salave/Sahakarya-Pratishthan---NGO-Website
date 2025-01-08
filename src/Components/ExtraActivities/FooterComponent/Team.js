import Navbar from "../../Navbar";
import PickMeal from "../../../Assets/pick-meals-image.png";
import ChooseMeals from "../../../Assets/choose-image.png";
import DeliveryMeals from "../../../Assets/delivery-image.png";

import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom'; 
import Footer from "../../Footer";
const Team = () =>
{


    const navigate = useNavigate(); 
    
  const workInfoData = [
    {
      image: DeliveryMeals,
      title: "Pravin Nikum",
      text: "President",
      Profile: "SoftWare Developer",
     
    },
    {
      image: DeliveryMeals,
      title: "Teajs Thakur",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
     
    },
    {
      image: DeliveryMeals,
      title: "Tree Plantation",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
     
    },

    {
      image: DeliveryMeals,
      title: "Water For Wildlife",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      
    },

    {
      image: DeliveryMeals,
      title: "Donate Food",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      
    },

    {
      image: DeliveryMeals,
      title: "Extra Activities",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
     
    },
  
  ];

  const handleImageClick = (route) => {
    console.log("Navigating to:", route);
    navigate(route); // Redirect to the route on image click
  };


    return (
        <div>
            <Navbar />
        <div className="work-section-bottom">
            
        {workInfoData.map((data) => (
          <div 
            className="work-section-info" 
            key={data.title}
            onClick={() => handleImageClick(data.route)} // Add click handler for redirection
            style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
          >
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <p>{data.Profile}</p>
          </div>
        ))}
        
      </div>
      <Footer />
      </div>

        
    )
}

export default Team;