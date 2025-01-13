import Image from "next/image";
import React from "react";

interface ClientProps {
  imageSrc : string,
  alt:string,
}

const ClientCard = (props : ClientProps) => {
  return (
    <section className="w-[200px] h-[100px] bg-[#F3F3F3] flex flex-row justify-center items-center object-cover rounded-md">
      <div>
        <Image
          alt={props.alt}
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          className="object-cover"
          src={props.imageSrc}
        />
      </div>
    </section>
  );
};

export default ClientCard;
