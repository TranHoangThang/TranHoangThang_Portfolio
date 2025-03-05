import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      style={{ scrollMarginTop: "100px" }}
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="mt-12 text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal gradient-text">
                Learning Front-End Development | HTML, CSS & React
                </h1>
                <p className="text-sm md:text-md leading-tight">
                <br />
                I am in the process of learning and exploring the world of web development, 
                focusing on HTML, CSS, and React. I enjoy building user interfaces and continuously 
                improving my programming skills. With a strong eagerness to learn and a growth mindset, 
                I am always looking for opportunities to practice and develop real-world projects.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal gradient-text">
                Database Designer
              </h1>
                <p className="text-sm md:text-md leading-tight">
                <br />
                I can design database structures, create and manage tables, and define relationships in SQL Server and MySQL. Additionally, 
                I can write queries, optimize data retrieval, and develop stored procedures for efficient data processing.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal gradient-text">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                <br />
                I can develop backend systems using C# and Python, build APIs, and implement business logic to connect data with applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
