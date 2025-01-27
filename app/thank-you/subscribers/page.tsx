"use client";
import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { FaFacebookF, FaLinkedin, FaThumbsUp, FaWhatsapp } from 'react-icons/fa';
import ReactGA from 'react-ga4'

const Page = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Check if the code is running on the client-side
    setIsBrowser(typeof window !== 'undefined');
    ReactGA.event(window.location.pathname)
    if (typeof window !== 'undefined' && window.fbq) {
      // Example: Track a custom event
      window.fbq('track', 'Thank you Page Tracker');
    }
  }, []);

  const IconData = [
    {
      icon: <FaFacebookF />,
      linkref: "https://www.facebook.com/profile.php?id=61562728889991",
    },
    {
      icon: <FaLinkedin />,
      linkref: "https://www.linkedin.com/company/dtout-agency/?viewAsMember=true",
    },
    {
      icon: <FaWhatsapp />,
      linkref: "https://wa.link/f06ljl",
    },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-full space-y-10 md:space-y-20">
          {/* Title Here */}
          <div className="flex flex-col justify-center items-center text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-950">
              You are now subscribed. Thank You 🙏 !
            </h2>

            {/* Thumbs Up Icon */}
            <div className="text-6xl md:text-9xl text-gray-900 pb-10">
              <FaThumbsUp />
            </div>

            <p className="text-gray-500 text-lg md:text-xl w-[90%] md:w-[700px]">
            Thank You for Subscribing! Your actionable tips are on their way to your inbox. I’m here to help you grow your dental clinic. Book Your Free Consultation Call Now.
            </p>
          </div>

          {/* Links To Socials */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 w-full">
            {/* Connect With Us */}
            <div className="w-full sm:w-[300px] h-[200px] border border-primary flex flex-col justify-center items-center gap-8 shadow-md rounded-md p-6">
              <h2 className="text-gray-950 text-xl font-semibold">Connect With Us</h2>
              <div className="flex gap-6">
                {IconData.map((currentElement, index) => (
                  <a target="_blank" key={index} href={currentElement.linkref}>
                    <div className="p-4 border-2 border-primary rounded-full text-primary flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white">
                      {currentElement.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Book A Consultation Call */}
            <div className="w-full sm:w-[300px] h-[200px] border border-primary flex flex-col justify-center items-center gap-8 shadow-md rounded-md p-6">
              <h2 className="text-gray-950 text-xl font-semibold">Book A Consultation Call</h2>
              {isBrowser && (
                <PopupButton
                  className="bg-primary px-4 py-3 rounded-md cursor-pointer text-white text-md"
                  url="https://calendly.com/dtoutagency/free-consultation-call?month=2025-01"
                  rootElement={document.getElementById("root") ?? document.body}
                  text="Schedule A Call"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
