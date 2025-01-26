import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="container mx-auto px-10">
        <section className="max-w-full h-auto pt-20 pb-3 overflow-hidden">
          <div className="w-full flex flex-col justify-center items-center">

            <div className="w-full md:px-10 flex flex-col md:flex-row items-start justify-between md:items-center gap-y-12">
              <div className="flex-col gap-y-3">
                <h3 className="text-white/50 text-sm pb-2">Contact Info</h3>
                <div className="">
                  <h2 className="text-white text-2xl md:text-4xl pr-20 md:pr-40">
                    Helping Dental Practices Grow and Succeed in the Digital Era
                  </h2>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:justify-center md:items-center gap-1 md:gap-20 gap-y-10">
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-white font-semibold">Email Address</h4>
                  <hr className="text-white w-10 border-2" />
                  <h4 className="text-white/50 mt-3">srijansapkota7@gmai.com</h4>
                </div>

                <div className="flex flex-col gap-y-2">
                  <h4 className="text-white font-semibold">Number</h4>
                  <hr className="text-white w-10 border-2" />
                  <h4 className="text-white/50 mt-3">+977-9803574084</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:items-center mt-10 w-full">
              <hr className="text-white w-[200px] md:w-[600px] pb-5" />
              <h4 className="text-white text-center w-full">
                Copyright @ 2025 Dtout Agency. All Rights Reserved
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
