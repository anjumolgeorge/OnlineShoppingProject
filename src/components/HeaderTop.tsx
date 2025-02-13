import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
     <div className='border-b border-gray-200 hidden sm:block bg-slate-900'>
       <div className="container py-4 bg-slate-700">
         <div className="flex justify-between items-center bg-slate-600">
          <div className="hidden lg:flex gap-2 bg-slate-500">
           <div className="header_top_icon_wrapper">
           <FaFacebook />
           </div>
           <div className="header_top_icon_wrapper">
           <FaInstagram />
           </div>
           <div className="header_top_icon_wrapper">
           <FaLinkedin />
           </div>
         </div>
         <div className='text-gray-500 text-[12px]'>
          <b>FREE SHIPPING</b> THIS WEEK ORDER OVER-$55
         </div>
        </div>
       </div>
      </div>
  );
}

export default HeaderTop;
