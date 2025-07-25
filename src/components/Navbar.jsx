import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Пряме посилання на ваше резюме
  const resumeUrl = "https://kun.xxo.lol/y50pt6v9.pdf";

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110, // Налаштуйте зсув, якщо потрібно
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")} // Припускаючи, що у вас є секція з id="home"
          className="h-9 cursor-pointer"
          src="/assets/logo.png" // Переконайтеся, що логотип існує за цим шляхом
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)} className="capitalize">
                {section}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* Кнопка Resume для десктопної версії */}
        <motion.a
          href={resumeUrl}
          // Атрибут download може не працювати для зовнішніх посилань так, як для локальних,
          // але його можна залишити. Головне, що target="_blank" відкриє посилання.
          download="Volodymyr_Dedeliuk_CV.pdf"
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          target="_blank" // Відкриватиме PDF у новій вкладці
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        <motion.button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 h-full w-full bg-white shadow-lg pt-20 px-5"
          >
            <button
              className="absolute top-7 right-7 text-3xl"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-center text-center h-full gap-y-8 font-semibold text-lg">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <button onClick={() => scrollToSection(section)} className="py-2 w-full capitalize">
                    {section}
                  </button>
                </motion.li>
              ))}
              {/* Кнопка Resume для мобільної версії */}
              <motion.a
                href={resumeUrl}
                download="Volodymyr_Dedeliuk_CV.pdf"
                className="relative inline-block px-4 py-3 mt-4 font-semibold group text-lg"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} // Закривати меню при кліку
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                  Resume <TbDownload size={18} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}