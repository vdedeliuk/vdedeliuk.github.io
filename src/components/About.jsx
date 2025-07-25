import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between items-center flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" className="max-w-full h-auto" style={{ marginTop: '50px' }}/>
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
            About <span className="font-extrabold">Me</span>
          </h2>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
            I'm a passionate developer from Ukraine, specializing in Python & Node.js. I thrive on blending technical expertise to build creative, functional, and user-friendly applications that solve real-world problems
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            My development journey has been one of continuous evolution, taking on new challenges and keeping up with technologies. I build web applications and Telegram bots using technologies such as Python, Django, Node.js, MongoDB, SQLite, PostgreSQL, and Docker
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            Feel free to check out my projects on GitHub.
          </p>
        </div>
      </motion.div>
    </div>
  );
}