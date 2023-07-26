import React, { useState } from "react";
import img1 from "../assets/images/Shooters.png";
import img2 from "../assets/images/LeveType.png";
import img3 from "../assets/images/nutripage.png";
import img4 from "../assets/images/MyApp.png";
import img5 from "../assets/images/MyApp2.png";
import img6 from "../assets/images/MyApp3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Shooters",
      description: "Landing Page & Website",
      link:'https://www.figma.com/file/CcP1tC9vxQIolpuUpHd2g6/Shooters?type=design&mode=design&t=pHvz7Sf0kQ5ebWLx-0',
      img: img1,
    },
    {
      id: 2,
      title: "typescript community",
      description: "Landing Page & Website",
      link:'https://www.figma.com/file/a2hRKllClU29L6KOxfM61Z/LandingPage-LeveType?type=design&mode=design&t=Eqqhxtv6YFTnSwco-0',
      img: img2,
    },
    {
      id: 3,
      title: "Blog Nutrição",
      description: "Landing Page & Website",
      link:'https://www.figma.com/file/NEhtGZX147pByJbRvo5k02/Landing-Page-Nutri?type=design&node-id=0-1&mode=design&t=Eqqhxtv6YFTnSwco-0',
      img: img3,
    },
    {
      id: 4,
      title: "AnimeDBolso",
      description: "With AnimeDBolso, anime fans can create their own personalized lists and track their progress in an easy and organized way.",
      img: img4,
    },
    {
      id: 5,
      title: "Rick And Morty",
      description: "Design & Development",
      img: img5,
    },
    {
      id: 6,
      title: "Advinha Bia",
      description: "Design & Development",
      img: img6,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            UI/UX - Website
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            React Native
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  "
          >
            <ProjectCard item={projects[0]}/>
            <ProjectCard item={projects[1]}/>
            <ProjectCard item={projects[2]}/>
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text3"
            className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  "
          >
            <ProjectCard item={projects[3]}/>
            <ProjectCard item={projects[4]}/>
            <ProjectCard item={projects[5]}/>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
