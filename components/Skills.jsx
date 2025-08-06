import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { CgFigma } from 'react-icons/cg';

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "Django", icon: <img src="/assets/django.svg" alt="Django icon" style={{ width: 50, height: 50 }} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 5, name: "Figma", icon: <CgFigma size={50} /> },
    { id: 6, name: "Docker", icon: <FaDocker size={50} /> },
  ]);

  return (
    <div className="bg-black text-white mt-24 lg:mt-32 py-8 lg:py-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white text-black border-2 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}