
import React from "react";
import ProductCard from "./ProductCard";

const productPerfume = [
  { img: "/perfume1.jpg", title: "Royal Essence", desc: "Luxury & Long-lasting", rating: 3, price: 999 },
  { img: "/perfume2.jpg", title: "Velvet Oud", desc: "Exotic & Rich", rating: 2, price: 899 },
  { img: "/perfume3.jpg", title: "Floral Bliss", desc: "Fresh & Elegant", rating: 4, price: 400 },
  { img: "/perfume4.webp", title: "Golden Musk", desc: "Classic & Premium", rating: 5, price: 599 },
  { img: "/perfume5.jpg", title: "Mystic Noir", desc: "Seductive & Deep", rating: 4, price: 400 },
  { img: "/perfume6.jpg", title: "Citrus Splash", desc: "Refreshing & Light", rating: 5, price: 700 },
  { img: "/perfume7.jpg", title: "Amber Rose", desc: "Warm & Sensual", rating: 2, price: 799 },
  { img: "/perfume8.jpg", title: "Sapphire Mist", desc: "Elegant & Bold", rating: 3, price: 999 },
];

const Perfume = () => {
  return (
    <div id="productPerfume" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          ✨ Premium Perfumes Collection ✨
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productPerfume.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfume;
