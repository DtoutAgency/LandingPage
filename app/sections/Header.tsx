"use client"
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { PopupButton } from "react-calendly";

const Header = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser to true when the component is mounted (i.e., on the client-side)
  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <motion.section
      initial={{
        y: -100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: "easeIn"
      }}
      className="py-5 z-50 fixed backdrop-blur flex justify-center w-full"
    >
      <div className="flex flex-row justify-between items-center mx-10 w-full max-w-7xl">
        {/* Brand Name */}
        <div>
          <h2 className="text-xl text-gray-500">
            D<span className="text-gray-950 font-extrabold">tout Agency</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row justify-center items-center gap-x-10">
          <a className="text-gray-700 hover:underline cursor-pointer" href="#hero">
            Home
          </a>
          <a className="text-gray-700 hover:underline cursor-pointer" href="#contact">
            Contact Us
          </a>
          <a className="text-gray-700 hover:underline cursor-pointer" href="#about">
            About
          </a>
          <a className="text-gray-700 hover:underline cursor-pointer" href="#services">
            Services
          </a>
          <a className="text-gray-700 hover:underline cursor-pointer" href="#clients">
            Clients
          </a>

          {/* Calendly Button */}
          {isBrowser && (
            <PopupButton
              className="bg-primary px-4 py-3 rounded-md cursor-pointer text-white text-md"
              url="https://calendly.com/dtoutagency/free-consultation-call?month=2025-01"
              rootElement={document.getElementById("root") ?? document.body}
              text="Get In Touch"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
