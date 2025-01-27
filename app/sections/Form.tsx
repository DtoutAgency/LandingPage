"use client";

import React from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {motion} from 'framer-motion';




const Form = () => {


  const IconData = [
    {
      icon:<FaFacebookF/>,
      linkref:"https://www.facebook.com/profile.php?id=61562728889991" , 
    },
    {
      icon:<FaLinkedin/>,
      linkref:"https://www.linkedin.com/company/dtout-agency/?viewAsMember=true" , 
    },
    {
      icon:<FaWhatsapp/>,
      linkref:"https://wa.link/f06ljl" , 
    },
  ]
  return (
    <section id="contact" className="pb-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col justify-start mx-10 md:mx-0">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-4 items-center pb-10">

            {/* Right Side */}
            <motion.div
            initial = {{
              x:-100,
              opacity:0,
            }}
            whileInView={{
            
              x:0,
              opacity:1,
            }}
            transition={{
              duration:0.5,
              ease:"easeIn"
            }}
            viewport={{
              once:true,
            }}
            >
              <h3 className="text-gray-500 text-sm md:text-lg rounded pb-3">
                Connect With Us
              </h3>
              <div className=" md:w-[800px]">
                <h1 className="text-gray-900 text-lg md:text-4xl font-semibold leading-snug">
                 Unlock Expert Tips to Attract More Patients, Boost Revenue, and Scale Your Clinic – Subscribe Now!
                </h1>
              </div>
            </motion.div>


              {/* Left Side */}
            {/* Social Media Icons */}
            <motion.div 

              initial = {{
                x:100,
                opacity:0,
              }}
              whileInView={{
                x:0,
                opacity:1,
              }}
              transition={{
                duration:0.5,
                ease:"easeIn"
              }}
              viewport={{
                once:true,
              }}


            
            className="flex flex-row md:flex-col gap-x-10 md:gap-x-0 gap-y-6">
              {IconData.map((currentElement, index) => (
                <a target="_blank" key={index} href={currentElement.linkref}>
                <div className="flex flex-row justify-center items-center">
                  <div className="p-4 border-2 border-primary rounded-full text-primary flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white">
                   {currentElement.icon}
                  </div>
                </div>
                </a>
              ))}
            </motion.div>


          </div>

          {/* Flodesk Form Integration */}
          <motion.div
          
          initial={{
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
          viewport={{
            once:true,
          }}
          >
            <form
              
              className="flodesk-form flex flex-col gap-y-5 justify-center"
              action="https://form.flodesk.com/forms/677bf107d9e8e194244fe00d/submit"
              method="post"
             
            >
              <div className="flex flex-wrap justify-center gap-20 ">
                
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="outline-none w-[550px] p-3 border-b-2 border-gray-500 text-gray-700 mb-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                 className="outline-none w-[550px] p-3 border-b-2 border-gray-500 text-gray-700 mb-4"
                  required
                />
                    <input
                  type="text"
                  name="Clinic Name"
                  placeholder="Clinic Name"
                 className="outline-none w-[550px] p-3 border-b-2 border-gray-500 text-gray-700 mb-4"
                  required
                />
                    <input
                  type="text"
                  name="Clinic Location"
                  placeholder="Clinic Location"
                  className="outline-none w-[550px] p-3 border-b-2 border-gray-500 text-gray-700 mb-4"
                  required
                />
              
              </div>
              
              <div className="flex flex-row w-full justify-center mt-4">
                  <button
                  onClick={()=>{
                    if (typeof window !== 'undefined' && window.fbq) {
                      window.fbq('track', 'Flodesk Form Submission'); 
                    }
                  }}
                    type="submit"
                    className=" bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
                  >
                  Access Proven Strategies
                  </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
