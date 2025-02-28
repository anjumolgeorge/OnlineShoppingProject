
// import React from 'react';
// interface propsType {
//     image: string;
//     title: string;
//     mainTitle: string;
//     price:string;
// }

// const Slide: React.FC<propsType> = ({image, title, mainTitle, price}) => {
   
//   return (
//     <div className=' outline-none border-none relative'>
//     <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]
//     -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0
//     rounded-lg sm:rounded-none">
//         <h3 className=' text-red-600 text-[24px] lg:text-[28px]'>{title}</h3>
//         <h2 className='text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading[1.2]'>
//           {mainTitle}
//         </h2>
//         <h3 className=' text-[24px] text-gray-500'>
//           starting at{" "}
//           <b className=' text-[20px] md:text-[24px] lg:text-[30px]'>{price}
//             </b>.00
//         </h3>
//         <div className=' bg-red-500 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg
//         inline-block cursor-pointer hover:bg-black' >
//           Shop Now
//         </div>
//        </div>
//      <img className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right
//      md:object-left-bottom" 
//      src={image}
//      alt='banner'
//      width={2000}
//      height={2000}/>
//     </div>
//   );
// }

// export default Slide;



import React from "react";

interface propsType {
  image: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ image, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${image})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 text-center text-white p-6 sm:p-10 md:p-14 max-w-2xl">
        <h3 className="text-lg md:text-xl lg:text-2xl text-yellow-400 uppercase tracking-wide font-semibold">
          {title}
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 drop-shadow-lg">
          {mainTitle}
        </h2>
        <p className="text-lg md:text-xl mt-2 font-semibold">Starting at ₹{price}.00</p>

        {/* Call to Action */}
        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full transition-all duration-300 shadow-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Slide;
