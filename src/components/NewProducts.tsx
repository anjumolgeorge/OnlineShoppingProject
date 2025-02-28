import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  { img: "/shopping4.webp", title: "Dress", desc: "Modern looks", rating: 4, price: 999 },
  { img: "/shopping12.jpg", title: "Dress", desc: "Modern looks", rating: 4, price: 999 },
  { img: "/heels2.webp", title: "Heels", desc: "Smoothy Walk", rating: 4, price: 599 },
  { img: "/shopping5.jpg", title: "Dress", desc: "Modern looks", rating: 4, price: 999 },
  { img: "/shoe3.webp", title: "Sports", desc: "Running Shoes - Black", rating: 4, price: 1999 },
  { img: "/perfume7.jpg", title: "Perfume", desc: "Smoothy Smell", rating: 4, price: 599 },
  { img: "/watches7.webp", title: "Watches", desc: "Smart Watches Vital Plus", rating: 4, price: 4999 },
  { img: "/perfume8.jpg", title: "Perfume", desc: "Smoothy Smell", rating: 4, price: 599 },
];

const NewProducts = () => {
  return (
    <div id="newproducts" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          ✨ New Arrivals ✨
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((item, index) => (
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

export default NewProducts;
