// "use client"
// import React from 'react';
// import Slider from "react-slick"
// import Slide from './Slide';

// const Hero = () => {
//     var settings = {
//         dots: true,
//         infinite:true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         pauseOnHover:false,
//     };

//     const slideData = [
//         {
//             id:0,
//             image:"/banner-1.jpg",
//             title:"Trending Item",
//             // mainTitle: "MODERN SUNGLASSES",
//             price:"1499"
//         },
//         {
//             id:1,
//             image:"/banner-2.webp",
//             title:"Trending Item",
//             mainTitle: "NEW FASHION SUMMER SALE",
//             price:"1999"
//         },
//         {
//             id:0,
//             image:"/banner-3.jpg",
//             title:"Trending Item",
//             mainTitle: "WOMEN'S LATEST FASHION SALE",
//             price:"999"
//         },
//     ]
//   return (
//     <div>
//       <div className="container pt-6 lg:pt-0">
//         <Slider {...settings}>
//             {slideData.map((item)=>(
//                 <Slide
//                 key={item.id}
//                 image={item.image}
//                 title={item.title}
//                 mainTitle={item.mainTitle}
//                 price={item.price}/>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Hero;



"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 4000,
    fade: true, // Smooth fade effect for transitions
    arrows: false,
  };

  const slideData = [
    {
      id: 0,
      image: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "MODERN SUNGLASSES",
      price: "1499",
    },
    {
      id: 1,
      image: "/banner-2.webp",
      title: "Trending Item",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "1999",
    },
    {
      id: 2,
      image: "/banner-3.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "999",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="container mx-auto">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              image={item.image}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
