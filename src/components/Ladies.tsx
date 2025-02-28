
import React from "react";
import ProductCard from "./ProductCard";

const productList = [
  { img: "/shopping1.webp", title: "Floral Dress", desc: "Elegant & Stylish", rating: 4, price: 1499 },
  { img: "/shopping2.jpg", title: "Chic Gown", desc: "Luxury & Comfort", rating: 5, price: 2999 },
  { img: "/shopping3.webp", title: "Casual Top", desc: "Trendy & Lightweight", rating: 3, price: 899 },
  { img: "/shopping4.webp", title: "Evening Dress", desc: "Perfect for Parties", rating: 4, price: 1999 },
  { img: "/shopping5.jpg", title: "Boho Maxi", desc: "Relaxed Fit & Stylish", rating: 5, price: 1799 },
  { img: "/shopping6.jpg", title: "Stylish Jumpsuit", desc: "Modern & Comfy", rating: 4, price: 1599 },
  { img: "/shopping7.jpg", title: "Casual Hoodie", desc: "Cozy & Trendy", rating: 2, price: 1299 },
];

const Ladies = () => {
  return (
    <div id="productList" className="py-16 bg-pink-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          💃 Women's Outfits – Trendy & Elegant
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productList.map((item, index) => (
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

export default Ladies;
