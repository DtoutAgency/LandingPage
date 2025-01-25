import React, { ReactElement } from "react";

interface ServicePropsType {
  title:string,
  description:string,
  iconSrc:ReactElement,
}

const ServiceCard = (props : ServicePropsType) => {
  return (
    <section>
      <div className=" px-2 md:px-6 py-12 md:w-[360px] flex flex-row items-center md:items-start gap-x-1 md:gap-x-10 md:flex-col gap-y-5 hover:bg-[#F3F3F3] rounded-md">
        <div>
         {props.iconSrc}
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-gray-950 font-extrabold md:font-semiboldp text-sm md:text-lg">{props.title}</h2>
          <p className="text-gray-700 text-sm md:text-xs">{props.description}</p>
        </div>
      </div>
    </section>
  );
};


export default ServiceCard