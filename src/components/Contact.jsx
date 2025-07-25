import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const email = "vaysed.dev@gmail.com";

  const socialLinks = [
    { icon: IoLogoTwitter, href: "https://x.com/kun3741", label: "Twitter" },
    { icon: IoLogoLinkedin, href: "https://linkedin.com/in/kun3741", label: "LinkedIn" },
    { icon: BsGithub, href: "https://github.com/kun3741", label: "GitHub" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center mb-8 lg:mb-16'
      >
        
      </motion.h2>

      <div className='flex justify-center items-center mt-8 lg:mt-0'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full max-w-lg flex flex-col justify-center items-center lg:items-start text-center lg:text-left'
        >
          <div>
            <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
              <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
              <h2>Something special</h2>
            </div>

            <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>

            <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4 items-center lg:items-start'>
              <motion.a
                whileHover={{ x: 5 }}
                className='flex items-center gap-2 group'
                href={`mailto:${email}`}
              >
                <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                  <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
                {email}
              </motion.a>
              
              {/* Розмістіть іконки соцмереж тут, якщо вони потрібні */}
              <div className='flex items-center gap-x-3 lg:gap-x-4 mt-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-white text-black p-2 lg:p-3 rounded border-2 border-black" // Змінив колір іконки на чорний для білого фону
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}