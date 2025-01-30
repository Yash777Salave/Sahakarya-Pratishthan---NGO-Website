import Home from "./Home";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
