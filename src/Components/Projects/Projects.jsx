import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Ecommerce PetShop"
          main="this is Ecommerce website created by HTML, CSS, Javascript and C#."
          sourceLink="https://github.com/TranHoangThang/PhuQuangThang_5-2-3_MVC_EcommercPetShop"
        />
        <ProjectCard
          title="Winforms Petshop"
          main="this is a desktop app use for Pet shop management."
          sourceLink="https://github.com/TranHoangThang/AGIlE_Petshop"
        />
        <ProjectCard
          title="Bangboo Ecommerce website"
          main="This is a website that sells model statues of the Bangboos in the game Zenless Zone Zero."
          sourceLink="https://github.com/Quang161/E-commerce-Store-for-Figures-Bangboo-shop"
        />
      </div>
    </div>
  );
};

export default Projects;
