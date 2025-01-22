import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from "./Components/EducationDepartment/Education";
import Health from "./Components/HealthDepartment/Health";
import MainLayout from "./Components/MainLayout";
import Treeplantation from "./Components/TreePlantationDepartment/Treeplantation";
import WaterWildlife from "./Components/WaterForWildLife/WaterWildlife";
import FoodDonation from "./Components/FoodDonation/FoodDonation";
import ExtraActivities from "./Components/ExtraActivities/ExtraActivities";
import Team from "./Components/ExtraActivities/FooterComponent/Team";
//image length= width 1344 ,length =524

function App() {
  return (
    <div className="App">
      {/* Wrap all components inside Router */}
      <Router>
        {/* Define Routes */}
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<MainLayout />} />
          <Route path='/education' element={<Education />} />
          <Route path='/health' element={<Health />} />
          <Route path='/treeplantation' element={<Treeplantation />} />
          <Route path='/waterwildlife' element={<WaterWildlife />} />
          <Route path='/foodDonation' element={<FoodDonation />} />
          <Route path='/extraActivity' element={<ExtraActivities />} />
          <Route path='/team' element={<Team />} />
          {/* You can add other routes here as needed */}
        </Routes>

        {/* Components rendered outside of the routes but inside the Router */}
    
      </Router>
    </div>
  );
}

export default App;
