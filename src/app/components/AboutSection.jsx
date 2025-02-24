"use client";
import { motion } from "framer-motion";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Stack Developer, Brototype</li>
        <li>Bachelor of Technology, APJ Abdul Kalam University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-4" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Column - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start from left
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
        >
        <Image src="/images/about-image.png" width={500} height={500} alt="about image" />
        </motion.div>
        {/* Right Column - Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Start from right
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Redux, Node.js, Express, MongoDB, TailwindCSS,
            HTML, CSS, AWS, Postman, Figma and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;