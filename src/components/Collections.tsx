
import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = [
  { img: "/watches3.webp", title: "Classic Watch", desc: "Timeless & Elegant", rating: 2, price: 399 },
  { img: "/watches4.webp", title: "Luxury Watch", desc: "Modern & Stylish", rating: 3, price: 399 },
  { img: "/watches5.webp", title: "Bold Watch", desc: "Sleek & Trendy", rating: 3, price: 399 },
  { img: "/watches6.webp", title: "Minimalist Watch", desc: "Simple & Premium", rating: 4, price: 399 },
  { img: "/watches7.webp", title: "Urban Watch", desc: "Futuristic & Cool", rating: 5, price: 399 },
  { img: "/shoe1.webp", title: "Sport Sneakers", desc: "Comfort & Style", rating: 3, price: 399 },
  { img: "/shoe2.webp", title: "Casual Kicks", desc: "Trendy & Light", rating: 3, price: 399 },
  { img: "/heels1.webp", title: "Elegant Heels", desc: "Perfect for any occasion", rating: 4, price: 999 },
  { img: "/heels2.webp", title: "Luxury Heels", desc: "Premium & Stylish", rating: 4, price: 599 },
];

const Watches = () => {
  return (
    <div id="newProducts" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 uppercase tracking-wide">
          🚀 Newly Launched Collection 🔥
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {NewProducts.map((item, index) => (
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

export default Watches;
