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
    hidden: { opacity: 0, x: 220 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
            Only 5 Spots Left for Our Proven Growth Program!
            </h3>
          </motion.div>

          {/* Animate text line by line */}
          <div className="pb-10">
            <motion.h2
              className="text-gray-950 leading-10 md:leading-tight text-3xl md:text-7xl font-normal"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {`More Patients . More Revenue 🦷. Less Stress – Let’s Make It Happen Now! `.split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, ease: "easeIn" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="py-4 flex flex-col justify-center items-center"
            >
              <PopupButton
                className="bg-primary text-xs md:text-lg px-5 py-3 md:px-7 md:py-5 rounded-md cursor-pointer text-white text-md"
                url="https://calendly.com/dtoutagency/free-consultation-call?month=2025-01"
                rootElement={document.getElementById("root") ?? document.body}
                text="Schedule Your Free Strategy Call, Now!"
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
                src="/Img/a.png"
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
