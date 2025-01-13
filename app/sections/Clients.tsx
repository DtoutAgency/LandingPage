"use client"

import React from 'react'
import ClientCard from '../components/ClientCard'
import {motion} from 'framer-motion'

const Clients = () => {
  const ClientData = [
    {
      iconSrc: "/ClientsLogo/Crystal Dental.png",
      alt: "Crystal Dental Logo"
    },
    {
      iconSrc: "/ClientsLogo/DentalLife.png",
      alt: "Dental Life Logo"
    },
    {
      iconSrc: "/ClientsLogo/DentInn.png",
      alt: "Dent Inn Logo"
    },
    {
      iconSrc: "/ClientsLogo/HappyDent.png",
      alt: "HappyDent Logo"
    },
    {
      iconSrc: "/ClientsLogo/Hirayu.png",
      alt: "Hirayu Logo"
    },
    {
      iconSrc: "/ClientsLogo/Nidan.png",
      alt: "Nidan Logo"
    },
    {
      iconSrc: "/ClientsLogo/Smile.png",
      alt: "Smile Logo"
    },
    {
      iconSrc: "/ClientsLogo/Sparsh.png",
      alt: "Sparsh Logo"
    },
    {
      iconSrc: "/ClientsLogo/SupremeDental.png",
      alt: "Supreme Dental Logo"
    },
    {
      iconSrc: "/ClientsLogo/Tooth%20Crafters.png",
      alt: "Tooth Crafters Logo"
    },
    {
      iconSrc: "/ClientsLogo/Zen.png",
      alt: "Zen Logo"
    }
  ]
  
  return (
    <section id="clients" className="py-20">
    <div className="container mx-auto">
      <div className="flex flex-col mx-10 md:mx-0 gap-y-10">
        <div>
          <motion.h2 
          initial={{
            x:-100,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          transition = {{
            duration:0.6,
            ease:"easeIn",
          }}
          
          viewport = {{
            once:true,
          }}
          className="text-gray-900 text-2xl md:text-4xl font-semibold pb-5">
          Our Clients
          </motion.h2>
        </div>
        <motion.div 
        initial={{
          y:100,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1,
        }}

        transition={{
          duration:0.6,
          ease:"easeIn"
        }}
        viewport={{
          once:true,
        }}
        className="flex flex-wrap justify-center  gap-20 md:gap-10">
          {ClientData.map((client, index) => (
            <ClientCard key={index} imageSrc={client.iconSrc} alt={client.alt} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Clients