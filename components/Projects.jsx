import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const githubUsername = "kun3741";

const projects = [
  {
    id: 1,
    title: "Vaysed Shop",
    description: "A full-stack e-commerce web application built with Python and Django, featuring product catalogs, shopping cart functionality, Monobank payment integration, and Docker deployment readiness. Manages products, orders, and customers via Django Admin.",
    image: "/assets/vaysed-shop.png", 
    link: `https://github.com/kun3741/vaysedshop` 
  },
  {
    id: 2,
    title: "Pizza Ordering Telegram Bot",
    description: "A Node.js Telegram bot facilitating online pizza orders, with SQLite for data management. Includes an interactive pizza builder, shopping cart, checkout process, and a callback request feature for customer support.",
    image: "/assets/pizza-bot.png", 
    link: `https://github.com/kun3741/vaysedpizza-tg` 
  },
  {
    id: 3,
    title: "Prudbay Clothes Support Bot",
    description: "A Telegram bot to automate customer support and order management for prudbaydelivery, featuring user registration, ticketing, order management, MongoDB & Airtable integration.",
    image: "/assets/prudbay-bot.png", 
    link: `https://t.me/prudbaysupport_bot`
  },
  {
    id: 4,
    title: "Nova Party Telegram Bot",
    description: "A comprehensive solution for event organizers that allows managing ticket sales directly within Telegram. The project was developed from scratch, including the backend, payment system integration logic, and administrative tools. The system enables users to easily browse events, purchase tickets via Monobank, and receive them as a QR code. For administrators, a panel has been implemented to create events, view revenue statistics, broadcast announcements, and validate tickets through a Telegram-integrated web app.",
    image: "https://vaysed.tech/ao4ll2ho.png",
    link: `https://t.me/novaparty_bot` 
  },
  {
    id: 5,
    title: "Telegram Message Forwarder Bot",
    description: "A Node.js Telegram bot for automatically forwarding messages from business accounts to specified chats. Features include message forwarding, edit tracking, delete notifications, support for all message types, MongoDB storage, and admin panel.",
    image: "https://vaysed.tech/yprficve.png", 
    link: `https://github.com/kun3741/msg-resender`
  },
  {
    id: 6,
    title: "Subscription Checker Bot",
    description: "A Telegram bot with WebApp for checking user subscription to channels and providing exclusive content only to subscribers. Built with Node.js/Express, features subscription verification, WebApp interface, and secure content delivery.",
    image: "https://vaysed.tech/2geycx3a.png", 
    link: `https://github.com/kun3741/subscribe-checker`
  },
  {
    id: 7,
    title: "Market Parser",
    description: "A web scraping and data parsing tool for market analysis. Extracts and processes market data for insights and analysis. Built with modern web technologies for efficient data collection and processing.",
    image: "https://vaysed.tech/v8zcnpkr.png",
    link: `https://github.com/kun3741/market-parser`
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image} // Переконайтеся, що шляхи до зображень правильні
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title} on GitHub`}>
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}