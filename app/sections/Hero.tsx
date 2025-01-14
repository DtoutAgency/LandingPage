"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false); // Client-side check state

  useEffect(() => {
    // This ensures that the code runs only after the component has mounted
    setIsClient(true);
  }, []);

  const sentenceVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: -120 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="pb-20 pt-40">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col justify-start mx-10 md:mx-0">
          {/* Animate this div */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-row pb-1"
          >
            <h3 className="text-gray-500 text-sm md:text-lg rounded">
              Limited - Time Offer: Only 5 spots Left
            </h3>
          </motion.div>

          {/* Animate text line by line */}
          <div>
            <motion.h2
              className="text-gray-950 leading-10 md:leading-tight text-3xl md:text-7xl font-normal"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {`Results Guaranteed or 2 Months Free – Limited Offer Ends January 20! 🦷`.split(" ").map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Calendly Button (Only renders on client side) */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="py-4 flex flex-col justify-center items-center"
            >
              <PopupButton
                className="bg-primary text-lg px-7 py-5 rounded-md cursor-pointer text-white text-md"
                url="https://calendly.com/dtoutagency/free-consultation-call?month=2025-01"
                rootElement={document.getElementById("root") ?? document.body}
                text="Schedule A Call"
              />
            </motion.div>
          )}

          {/* Image animation */}
          <div className="relative pt-5 md:pt-10 w-full flex flex-row justify-center">
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                className="rounded-md w-[1200px] h-auto"
                src="/Img/Clinic.png"
                alt="Clinic Image"
                width={1000}
                height={1000}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
