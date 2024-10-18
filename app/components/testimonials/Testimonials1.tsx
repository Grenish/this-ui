import React from "react";
import Image from "next/image";

interface Testimonials1Props {
  profileimg: string;
  userName: string;
  testimonial: string;
  companyName: string;
  designation: string;
}

const Testimonials1: React.FC<Testimonials1Props> = ({
  profileimg,
  userName,
  testimonial,
  companyName,
  designation,
}) => {
  return (
    <div className="w-1/3 bg-gray-200 h-52 rounded-xl overflow-hidden flex items-center">
      <div className="w-1/2">
        <Image
          src={profileimg}
          alt={userName}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-2 ">
        <p className="w-full text-lg font-light ">{testimonial}</p>
        <div className="mt-2">
          <p>{userName}</p>
          <p className="text-xs">{designation}</p>
          <p className="text-xs">{companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
