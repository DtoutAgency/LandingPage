"use client";
import {motion} from 'framer-motion'
import { FaMeta } from "react-icons/fa6"
import ServiceCard from "../components/ServiceCard"
import { MdGroup } from "react-icons/md"
import { IoMdGitNetwork } from "react-icons/io"
import { BsGraphUpArrow } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"


const Services = () => {
  const ServiceData = [
    {
      title: "Meta Ads Management",
      description: "Run targeted Facebook and Instagram campaigns that attract high-quality patient leads.",
      iconSrc: <FaMeta size={100} className="text-primary"/>
    },
    {
      title: "Lead Generation",
      description: "Implement proven strategies to consistently bring in qualified patient inquiries.",
      iconSrc: <MdGroup size={100} className="text-primary"/>
    },
    {
      title: "Email Marketing and Conversion",
      description: "Nurture leads with personalized email workflows, converting them into loyal patients.",
      iconSrc: <IoMdGitNetwork size={100} className="text-primary"/>
    },
    {
      title: "Sales Funnel Creation",
      description: "Create optimized sales funnels that guide patients from interest to booking their appointment.",
      iconSrc:<BsGraphUpArrow size={100} className="text-primary"/>
    },
    {
      title: "Landing Page Optimization",
      description: "Design professional, high-converting landing pages that capture and convert leads effectively.",
      iconSrc: <CgWebsite size={100} className="text-primary"/>
    }
  ]
  
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col mx-10 md:mx-auto">
          <motion.h2 
          initial={{
            x:-100,
            opacity:0,
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          transition={{
            duration:0.6,
            ease:"easeIn",
          }}
          viewport={{
            once:true,
          }}
          
          className="text-gray-900 text-2xl md:text-4xl font-semibold pb-5">Our Services</motion.h2>
       <motion.div 
       initial = {{
        y:100,
        opacity:0,
       }}
       whileInView={{
        y:0,
        opacity:1,
       }}
       transition={{
        duration:0.6,
        ease:"easeIn"
       }}
       viewport = {{
        once:true,
       }}
       className="flex flex-wrap justify-center gap-10">
       {ServiceData.map((service, index) => (
        <ServiceCard
          key={index}
          iconSrc={service.iconSrc}
          title={service.title}
          description={service.description}
        />
      ))}
    </motion.div>   
    
    </div>
    </div>
  </section>
  )
}

export default Services