
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { img: "/shopping8.jpg", title: "Casual Shirt", desc: "Modern & Comfortable", rating: 4, price: 1299 },
  { img: "/shopping9.jpg", title: "Formal Suit", desc: "Premium Quality", rating: 5, price: 3999 },
  { img: "/shopping10.jpg", title: "T-Shirt", desc: "Stylish Summer Wear", rating: 4, price: 999 },
  { img: "/shopping11.jpg", title: "Denim Jacket", desc: "Trendy Look", rating: 5, price: 2499 },
  { img: "/shopping12.jpg", title: "Slim Fit Jeans", desc: "Classic & Durable", rating: 4, price: 1499 },
  { img: "/shopping13.jpg", title: "Casual Sneakers", desc: "Lightweight & Stylish", rating: 5, price: 1999 },
  { img: "/shopping14.jpg", title: "Leather Wallet", desc: "Premium Leather", rating: 4, price: 799 },
];

const Gents = () => {
  return (
    <div id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          👔 Men's Stylish Looks
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item, index) => (
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

export default Gents;
