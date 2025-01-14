import React from 'react'

const Footer = () => {
  return (
    <section className="bg-gray-950 max-w-full h-auto pt-20 pb-3 overflow-hidden">
  <div className="flex flex-col justify-center items-center mx-10">
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-12 md:gap-x-60">
      
      <div className="flex-col gap-y-3">
        <h3 className="text-white/50 text-sm pb-2">Contact Info</h3>
        <div className="md:w-[500px]">
          <h2 className="text-white text-2xl md:text-4xl">Helping Dental Practices Grow and Succeed in the Digital Era</h2>
        </div>
      </div>
      
      <div className="flex flex-row justify-center items-center gap-20">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-white font-semibold">Email Address</h4>
          <hr className="text-white w-10 border-2"></hr>
          <h4 className="text-white/50 mt-3">srijansapkota7@gmai.com</h4>
        </div>
        
        <div className="flex flex-col gap-y-2">
          <h4 className="text-white font-semibold">Number</h4>
          <hr className="text-white w-10 border-2"></hr>
          <h4 className="text-white/50 mt-3">+977-9803574084</h4>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col justify-center items-center mt-10">
      <hr className="text-white w-96 md:w-[600px] pb-5"></hr>
      <h4 className="text-white">Copyright @ 2025 Dtout Agency. All Rights Reserved</h4>
    </div>
  </div>
</section>

  )
}

export default Footer