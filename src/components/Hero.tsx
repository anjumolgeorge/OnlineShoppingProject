"use client"
import React from 'react';
import Slider from "react-slick"
import Slide from './Slide';

const Hero = () => {
    var settings = {
        dots: true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover:false,
    };

    const slideData = [
        {
            id:0,
            img:"/banner-1.jpg",
            title:"Trending Item",
            mainTitle: "NEW FASHION SUMMER SALE",
            price:"Rs 1499"
        },
        {
            id:1,
            img:"/banner-2.jpg",
            title:"Trending Item",
            mainTitle: "MODERN SUNGLASSES",
            price:"Rs 1999"
        },
        {
            id:0,
            img:"/banner-3.jpg",
            title:"Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"Rs 999"
        },
    ]
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item)=>(
                <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}/>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
