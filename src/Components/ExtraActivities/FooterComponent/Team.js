import Navbar from "../../Navbar";
import PickMeal from "../../../Assets/pick-meals-image.png";
import ChooseMeals from "../../../Assets/choose-image.png";
import DeliveryMeals from "../../../Assets/delivery-image.png";
import Tejaswini2 from "../../../Assets/Team/Tejaswini2.jpg";
import Vaishali from "../../../Assets/Team/Vaishali.jpg";
import akshayblacky from "../../../Assets/Team/akshayblacky.jpg";
import akshaypatil from "../../../Assets/Team/akshaypatil.jpg";
import akshayT from "../../../Assets/Team/akshayT.jpg";
import amol from "../../../Assets/Team/amol.jpg";
import bhupesh from "../../../Assets/Team/bhupesh.jpg";
import chiku from "../../../Assets/Team/chiku.jpg";
import div from "../../../Assets/Team/div.jpg";
import gym from "../../../Assets/Team/gym.jpg";
import Himanshu from "../../../Assets/Team/Himanshu.jpg";
import jayu2 from "../../../Assets/Team/jayu2.jpg";
import kalyani2 from "../../../Assets/Team/kalyani2.jpg";
import mayur from "../../../Assets/Team/mayur.jpg";
import om from "../../../Assets/Team/om.jpg";
import Prasad from "../../../Assets/Team/Prasad.jpg";
import pravin2 from "../../../Assets/Team/pravin2.jpg";
import rana from "../../../Assets/Team/rana.jpg";
import sahil from "../../../Assets/Team/sahil.jpg";
import tejas2 from "../../../Assets/Team/tejas2.jpg";
import tejaspadvi from "../../../Assets/Team/tejaspadvi.jpg";
import yashBaba from "../../../Assets/Team/yashBaba.jpg";
import parth from "../../../Assets/Team/parth.jpg";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
const Team = () => {
  const navigate = useNavigate();

  const workInfoData = [
    {
      image: pravin2,
      title: "Pravin Nikum",
      text: "President",
      // Profile: "SoftWare Developer",
    },
    {
      image: tejas2,
      title: "Teajs Thakur",
      text: "Vice-President",
    },
    {
      image: mayur,
      title: "Mayur Koli",
      text: "Secretary",
    },

    {
      image: yashBaba,
      title: "Yash Salave",
      text: "Vice-Secretary",
    },

    {
      image: Prasad,
      title: "Prasad Wani",
      text: "Treasurer",
    },

    {
      image: rana,
      title: "RudrapratapSing Ahirrao",
      text: "Working President",
    },

    {
      image: chiku,
      title: "Khushal Wagh",
      text: "Research Analyst",
    },

    {
      image: om,
      title: "Rohit Aghav",
      text: "District Manager (Dhule)",
    },

    {
      image: jayu2,
      title: "Jayashree Kuwar",
      text: "Social Media Analyst",
    },

    {
      image: kalyani2,
      title: "Kalyani Patil",
      text: "Social Media Analyst",
    },

    {
      image: akshayblacky,
      title: "Akshay Patil",
      text: "Social Media Manager",
    },

    {
      image: amol,
      title: "Amol Patil",
      text: "Legal Advisor",
    },

    {
      image: div,
      title: "Divesh Sonawane",
      text: "Field Officer",
    },
    {
      image: bhupesh,
      title: "Bhupesh Patil",
      text: "Field Officer",
    },
    {
      image: Himanshu,
      title: "Himanshu Patil",
      text: "Field Officer",
    },
    {
      image: tejaspadvi,
      title: "Tejas Padvi",
      text: "Field Officer",
    },
    {
      image: sahil,
      title: "Sahil Nagarale",
      text: "Digital Creator",
    },
    {
      image: akshaypatil,
      title: "Akshay Patil",
      text: "Field Officer",
    },
    {
      image: parth,
      title: "Parth Patil",
      text: "Field Officer",
    },
    {
      image: Tejaswini2,
      title: "Tejaswini Kotkar",
      text: "Field Officer",
    },
    {
      image: Vaishali,
      title: "Vaishali Shrirao",
      text: "Digital Creator (YouTube)",
    },
    {
      image: gym,
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
