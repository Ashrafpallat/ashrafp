"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DocMate",
    description: "A doctor finding website using MERN stack",
    image: "/images/projects/1.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ashrafpallat/DocMate-front-end- ",
    previewUrl: "https://doc-mate-front-end.vercel.app/",
  },
  {
    id: 2,
    title: "My Watches",
    description: "E-Commerce website for selling watches using MERN and EJS",
    image: "/images/projects/2.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ashrafpallat/Watches_Ecom",
    previewUrl: "https://watches-ecom.onrender.com/",
  },
  {
    id: 3,
    title: "MERN Auth",
    description: "User Management System using MERN stack",
    image: "/images/projects/3.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ashrafpallat/MERN-CRUD-APP",
    previewUrl: "https://mern-crud-app-frontend-qgh6.onrender.com/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Clone website of Netflix using React and Firebase",
    image: "/images/projects/4.1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ashrafpallat/netflix-clone",
    previewUrl: "https://www.linkedin.com/posts/ashrafpallat_react-firebase-tmdb-activity-7220045965351604227-W7ob?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIHw0gBZNw_9zGpAoBaVkM1BY5AXECCdNM",
  },
  {
    id: 5,
    title: "Olx Clone",
    description: "Clone website of Olx using React and Firebase",
    image: "/images/projects/5.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ashrafpallat/OLX-Clone-React",
    previewUrl: "https://www.linkedin.com/posts/ashrafpallat_reactjs-firebase-webdevelopment-activity-7236369591340261376-drJi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIHw0gBZNw_9zGpAoBaVkM1BY5AXECCdNM",
  },
  {
    id: 6,
    title: "LinkedIn Clone",
    description: "Clone website of LinkedIn using HTML and CSS",
    image: "/images/projects/6.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ashrafpallat/LinkedIn",
    previewUrl: "https://www.linkedin.com/posts/ashrafpallat_webabrdesigning-linkedin-html5-activity-7119203425073942529-KPQa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIHw0gBZNw_9zGpAoBaVkM1BY5AXECCdNM",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;