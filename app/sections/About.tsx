"use client"
import Image from "next/image";
import {motion} from 'framer-motion';
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto overflow-hidden">
        {/* Section Title */}
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
        
        
        className="mx-10 md:mx-0 text-gray-900 text-2xl md:text-4xl font-semibold pb-10">
          About Us
        </motion.h2>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 gap-x-20 mx-10 md:mx-0">
          {/* Image Section */}
          <motion.div
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
                ease:"easeIn"
              }}
              viewport={{
                once:true,
              }}
          >
            <Image
              alt="About Us"
              loading="lazy"
              width={420}
              height={300}
              decoding="async"
              src="/Dtout_logo.png"
              className="rounded-md "
            />
          </motion.div>
          {/* Text Content */}


          <motion.div 
          initial={{
            x:100,
            opacity:0,
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          transition={{
            duration:0.6,
            ease:"easeIn"
          }}
          viewport={{
            once:true,
          }}
          className="md:w-[600px] space-y-3">
            <p className="text-gray-700 text-md ">
              At Dtout Agency, we are a results-driven digital marketing agency that partners exclusively with dental clinics to help them grow and thrive. Our mission is to empower clinics with tailored marketing strategies that attract high-quality patient leads, boost revenue, and establish long-term success in a competitive market.
            </p>
            <p className="text-gray-700 text-md">
              We specialize in leveraging proven digital marketing techniques, including high-performing ad campaigns, lead generation, email marketing, and sales funnel optimization. By focusing on delivering measurable ROI, we ensure that every strategy we implement aligns with your clinic’s growth goals.
            </p>
            <p className="text-gray-700 text-md">
              With a commitment to excellence and a track record of helping dental clinics generate consistent patient leads, we’re here to take your business to the next level—so you can focus on delivering exceptional care to your patients.
            </p>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;
