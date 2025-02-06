// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800 p-6">
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold text-green-600">About Us</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Learn more about our mission, vision, and the journey of Sahakarya
//           Pratishthan.
//         </p>
//       </header>

//       <section className="bg-white shadow-md rounded-lg p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-green-500">Who We Are</h2>
//         <p className="mt-4 leading-relaxed">
//           Sahakarya Pratishthan is a youth-driven organization founded by
//           like-minded individuals who believe in the power of collective action
//           at the grassroots level. We aim to create a positive ripple effect in
//           society, where even the smallest contributions can make a big
//           difference.
//         </p>
//         <p className="mt-4 leading-relaxed">
//           We work with special needs children, the elderly, and marginalized
//           communities. From organizing food donation camps to tree plantations
//           and animal care, we focus on empowering people and promoting
//           sustainable living practices.
//         </p>
//       </section>

//       <section className="bg-white shadow-md rounded-lg p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-green-500">Our Vision</h2>
//         <p className="mt-4 leading-relaxed">
//           We envision a future where every community in India has equal access
//           to essential resources for living a fulfilling life. Our goals include
//           spreading awareness about education, providing healthcare facilities,
//           restoring the environment through tree plantations, and promoting
//           animal welfare.
//         </p>
//         <p className="mt-4 leading-relaxed">
//           We aim to deepen the connection between communities and the
//           environment, fostering a harmonious future where people, animals, and
//           nature can thrive.
//         </p>
//       </section>

//       <section className="bg-white shadow-md rounded-lg p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-green-500">Our Mission</h2>
//         <p className="mt-4 leading-relaxed">
//           At Sahakarya Pratishthan, our mission is to empower underprivileged
//           communities across India through impactful programs in education,
//           healthcare, animal care, and environmental sustainability. We also aim
//           to expand our reach to nearby villages and eventually collaborate with
//           NGOs nationwide.
//         </p>
//         <p className="mt-4 leading-relaxed">
//           Over the last six years, we have grown significantly, and our
//           dedicated group of volunteers continues to make a big difference in
//           communities that need support.
//         </p>
//       </section>

//       <section className="bg-white shadow-md rounded-lg p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-green-500">Our Story</h2>
//         <p className="mt-4 leading-relaxed">
//           The idea for Sahakarya Pratishthan was born from a tragic road
//           accident. A group of young students witnessed the event and felt a
//           deep responsibility to help the orphaned child left behind. This small
//           gesture of taking on her education marked the beginning of our NGO.
//         </p>
//         <p className="mt-4 leading-relaxed">
//           What started with one child has now grown into a movement addressing
//           education, healthcare, environmental issues, and animal care. Today,
//           Sahakarya Pratishthan works tirelessly to tackle various social
//           challenges and make life better for everyone.
//         </p>
//       </section>

//       <footer className="text-center py-10">
//         <p className="text-gray-600">
//           © {new Date().getFullYear()} Sahakarya Pratishthan. All rights
//           reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import "../Components/About.css"; // Import custom CSS for styling
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        {/* Parallax Section */}
        <div
          style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "70vh",
            backgroundImage:
              "url('https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=612x612&w=0&k=20&c=MaI8mTFkStJHG4ZyKXNbynkdSCObejk73qutdW7vS7k=')",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "2rem",
              zIndex: 1,
            }}
          >
            {/* <h1>Your Text Goes Here</h1> */}
            <p style={{ fontSize: "6rem" }}>About Us</p>
          </div>
        </div>

        {/* About Us Section */}
        <section className="about-us-section">
          {/* <h2>About Us</h2> */}
          <p>
            Sahakarya Pratishthan is a group of passionate young people who
            believe in creating positive change in our communities. Over the
            years, we have worked hard to help children in need, including those
            in special schools. We provide important learning materials and
            tools to make their education easier. We also organize health camps
            in schools and villages, where we offer full body checkups, dental
            care, and eye care.
            <br />
            <br />
            We also help needy families by organizing food donation camps to
            ensure they have the daily necessities. We care about the
            environment and run tree plantation events and animal care programs
            to teach people about living sustainably and protecting nature. We
            also support the elderly in old age homes by providing them with
            essential supplies and spending time with them to bring joy into
            their lives. We organize art events for children, giving them the
            tools and guidance to express themselves.
            <br />
            <br />
            At Sahakarya Pratishthan, we are committed to making a real
            difference in many areas of life, bringing people together to create
            a better and more caring society.
          </p>
        </section>

        {/* Who Are We Section */}
        <section className="about-us-section">
          <h2>Who Are We?</h2>
          <ul>
            <li>
              Sahakarya Pratishthan is a youth-driven organization founded by
              like-minded individuals who believe in the power of collective
              action at the grassroots level.
            </li>
            <li>
              We have successfully implemented programs for children in blind,
              handicapped, and special kids’ schools by providing them with
              essential learning materials and educational support.
            </li>
            <li>
              We also organize events in old-age homes to ensure they receive
              daily necessities, thus making their life more comfortable and
              fulfilling.
            </li>
            <li>
              We regularly organize food donation camps to support marginalized
              families with their daily needs.
            </li>
            <li>
              We run environmental programs focused on tree plantation and
              animal care.
            </li>
          </ul>
        </section>

        {/* Our Vision Section */}
        <section className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every community in India has equal access
            to the essential resources for living a fulfilling life. This mainly
            involves:
            <ul>
              <li>
                Spreading awareness about education while offering necessary
                opportunities.
              </li>
              <li>
                Providing healthcare facilities for the needy through regular
                health camps and arranging free medical treatments.
              </li>
              <li>
                Restoring the environment through tree plantation drives and
                efforts promoting eco-friendly practices.
              </li>
              <li>
                Animal welfare through initiatives such as water-pot programs.
              </li>
            </ul>
            We believe our genuine initiative will help deepen a long-lasting
            connection between various communities and the environment. It will
            raise the sense of shared responsibility in society and the care for
            nature.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            At Sahakarya Pratishthan, our mission is to empower underprivileged
            communities across India through impactful programs in education,
            healthcare, animal care, and environmental sustainability.
            <br />
            <br />
            Over the last six years, our organization has seen remarkable growth
            in terms of the number of active members and being able to provide
            help in places that many people didn’t know about before.
            <br />
            <br />
            In the first phase, we plan to open new branches in nearby villages
            around Dhule city in the state of Maharashtra. Our goal is to expand
            further into different districts across Maharashtra by collaborating
            with other established non-profit organizations. In the second
            phase, we aim to connect with NGOs from other states in India,
            allowing us to reach the grassroots level and extend our impact
            nationwide.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="about-us-section">
          <h2>Our Story</h2>
          <p>
            The idea for Sahakarya Pratishthan was born from a heartbreaking
            event. A group of us, young students, witnessed a tragic road
            accident where a mother lost her life, leaving behind a little girl.
            This little girl, now orphaned, stood at the crossroads of life
            where her future seemed uncertain. Seeing this broke our hearts, and
            we felt a deep responsibility.
            <br />
            <br />
            We decided to take on the girl's education, a small gesture, but it
            marked the start of something much bigger. What started with helping
            one child inspired us to help many, and the fire of social
            responsibility that was ignited that day has been burning brightly
            ever since.
            <br />
            <br />
            It soon became a movement of young people committed to making a
            difference in the lives of others. We realize that we can help make
            the world a better place if we work together and care for those who
            need it the most. Over time, our NGO has grown and taken on many
            challenges successfully along the way. As we worked, we started
            noticing other problems in society- whether it was the environment,
            animal care, or the needs of people with various disabilities. The
            members of Sahakarya Pratishthan have come together to find
            solutions to these issues and helped resolve those with the utmost
            planning. Today, Sahakarya Pratishthan works in different areas,
            tackling a range of social issues to make life better for everyone.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;

// import React from "react";
// import "../Components/About.css"; // Import custom CSS for styling
// import Navbar from "./Navbar";

// const AboutUs = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="about-us-container">
//       {/* <div className="about-us-container"> */}

//         <section className="about-us-section">
//           <h2>About Us</h2>
//           <p>
//             Sahakarya Pratishthan is a group of passionate young people who
//             believe in creating positive change in our communities. Over the
//             years, we have worked hard to help children in need, including those
//             in special schools. We provide important learning materials and
//             tools to make their education easier. We also organize health camps
//             in schools and villages, where we offer full body checkups, dental
//             care, and eye care.
//             <br />
//             <br />
//             We also help needy families by organizing food donation camps to
//             ensure they have the daily necessities. We care about the
//             environment and run tree plantation events and animal care programs
//             to teach people about living sustainably and protecting nature. We
//             also support the elderly in old age homes by providing them with
//             essential supplies and spending time with them to bring joy into
//             their lives. We organize art events for children, giving them the
//             tools and guidance to express themselves.
//             <br />
//             <br />
//             At Sahakarya Pratishthan, we are committed to making a real
//             difference in many areas of life, bringing people together to create
//             a better and more caring society.
//           </p>
//         </section>

//         <section className="about-us-section">
//           <h2>Who Are We?</h2>
//           <ul>
//             <li>
//               Sahakarya Pratishthan is a youth-driven organization founded by
//               like-minded individuals who believe in the power of collective
//               action at the grassroots level.
//             </li>
//             <li>
//               We have successfully implemented programs for children in blind,
//               handicapped, and special kids’ schools by providing them with
//               essential learning materials and educational support.
//             </li>
//             <li>
//               We also organize events in old-age homes to ensure they receive
//               daily necessities, thus making their life more comfortable and
//               fulfilling.
//             </li>
//             <li>
//               We regularly organize food donation camps to support marginalized
//               families with their daily needs.
//             </li>
//             <li>
//               We run environmental programs focused on tree plantation and
//               animal care.

//             </li>
//           </ul>
//         </section>

//         <section className="about-us-section">
//           <h2>Our Vision</h2>
//           <p>
//             We envision a future where every community in India has equal access
//             to the essential resources for living a fulfilling life. This mainly
//             involves:
//             <ul>
//               <li>
//                 Spreading awareness about education while offering necessary
//                 opportunities.
//               </li>
//               <li>
//                 Providing healthcare facilities for the needy through regular
//                 health camps and arranging free medical treatments.
//               </li>
//               <li>
//                 Restoring the environment through tree plantation drives and
//                 efforts promoting eco-friendly practices.
//               </li>
//               <li>
//                 Animal welfare through initiatives such as water-pot programs.
//               </li>
//             </ul>
//             We believe our genuine initiative will help deepen a long-lasting
//             connection between various communities and the environment. It will
//             raise the sense of shared responsibility in society and the care for
//             nature.
//           </p>
//         </section>

//         <section className="about-us-section">
//           <h2>Our Mission</h2>
//           <p>
//             At Sahakarya Pratishthan, our mission is to empower underprivileged
//             communities across India through impactful programs in education,
//             healthcare, animal care, and environmental sustainability.
//             <br />
//             <br />
//             Over the last six years, our organization has seen remarkable growth
//             in terms of the number of active members and being able to provide
//             help in places that many people didn’t know about before.
//             <br />
//             <br />
//             In the first phase, we plan to open new branches in nearby villages
//             around Dhule city in the state of Maharashtra. Our goal is to expand
//             further into different districts across Maharashtra by collaborating
//             with other established non-profit organizations. In the second
//             phase, we aim to connect with NGOs from other states in India,
//             allowing us to reach the grassroots level and extend our impact
//             nationwide.
//           </p>
//         </section>

//         <section className="about-us-section">
//           <h2>Our Story</h2>
//           <p>
//             The idea for Sahakarya Pratishthan was born from a heartbreaking
//             event. A group of us, young students, witnessed a tragic road
//             accident where a mother lost her life, leaving behind a little girl.
//             This little girl, now orphaned, stood at the crossroads of life
//             where her future seemed uncertain. Seeing this broke our hearts, and
//             we felt a deep responsibility.
//             <br />
//             <br />
//             We decided to take on the girl's education, a small gesture, but it
//             marked the start of something much bigger. What started with helping
//             one child inspired us to help many, and the fire of social
//             responsibility that was ignited that day has been burning brightly
//             ever since.
//             <br />
//             <br />
//             It soon became a movement of young people committed to making a
//             difference in the lives of others. We realize that we can help make
//             the world a better place if we work together and care for those who
//             need it the most. Over time, our NGO has grown and taken on many
//             challenges successfully along the way. As we worked, we started
//             noticing other problems in society- whether it was the environment,
//             animal care, or the needs of people with various disabilities. The
//             members of Sahakarya Pratishthan have come together to find
//             solutions to these issues and helped resolve those with the utmost
//             planning. Today, Sahakarya Pratishthan works in different areas,
//             tackling a range of social issues to make life better for everyone.
//           </p>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutUs;
