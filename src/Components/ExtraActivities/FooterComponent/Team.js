import Navbar from "../../Navbar";
import PickMeal from "../../../Assets/pick-meals-image.png";
import ChooseMeals from "../../../Assets/choose-image.png";
import DeliveryMeals from "../../../Assets/delivery-image.png";
import Tejaswini from "../../../Assets/Team/Tejaswini.jpg";
import Vaishali from "../../../Assets/Team/Vaishali.jpg";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
const Team = () => {
  const navigate = useNavigate();

  const workInfoData = [
    {
      image: DeliveryMeals,
      title: "Pravin Nikum",
      text: "President",
      // Profile: "SoftWare Developer",
    },
    {
      image: DeliveryMeals,
      title: "Teajs Thakur",
      text: "Vice-President",
    },
    {
      image: DeliveryMeals,
      title: "Mayur Koli",
      text: "Secretary",
    },

    {
      image: DeliveryMeals,
      title: "Yash Salave",
      text: "Vice-Secretary",
    },

    {
      image: DeliveryMeals,
      title: "Prasad Wani",
      text: "Treasurer",
    },

    {
      image: DeliveryMeals,
      title: "RudrapratapSing Ahirrao",
      text: "Working President",
    },

    {
      image: DeliveryMeals,
      title: "Khushal Wagh",
      text: "Research Analyst",
    },

    {
      image: DeliveryMeals,
      title: "Rohit Aghav",
      text: "District Manager (Dhule)",
    },

    {
      image: DeliveryMeals,
      title: "Jayashree Kuwar",
      text: "Social Media Analyst",
    },

    {
      image: DeliveryMeals,
      title: "Kalyani Patil",
      text: "Social Media Analyst",
    },

    {
      image: DeliveryMeals,
      title: "Akshay Patil",
      text: "Social Media Manager",
    },

    {
      image: DeliveryMeals,
      title: "Amol Patil",
      text: "Legal Advisor",
    },

    {
      image: DeliveryMeals,
      title: "Divesh Sonawane",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Bhupesh Patil",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Himanshu Patil",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Tejas Padvi",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Sahil Nagarale",
      text: "Digital Creator",
    },
    {
      image: DeliveryMeals,
      title: "Akshay Patil",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Parth Patil",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Tejaswini Kotkar",
      text: "Field Officer",
    },
    {
      image: DeliveryMeals,
      title: "Vaishali Shrirao",
      text: "Digital Creator (YouTube)",
    },
    {
      image: DeliveryMeals,
      title: "Akshay Patil",
      text: "Field Officer",
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
            style={{ cursor: "pointer" }} // Change cursor to indicate it's clickable
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
  );
};

export default Team;
