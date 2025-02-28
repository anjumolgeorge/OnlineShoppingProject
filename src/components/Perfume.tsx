import React from 'react';
import ProductCard from './ProductCard';
const productPerfume = [{
    img:"/perfume1.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 3, 
    price: 999
},
{
    img:"/perfume2.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 2, 
    price: 899
},
{
    img:"/perfume3.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 4, 
    price: 400
},{
    img:"/perfume4.webp",
    title:"perfume",
    desc:"Modern looks",
    rating: 5, 
    price: 599
},
{
    img:"/perfume5.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 4, 
    price: 400
},
{
    img:"/perfume6.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 5, 
    price: 700
},
{
    img:"/perfume7.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 2, 
    price: 799
},
{
    img:"/perfume8.jpg",
    title:"perfume",
    desc:"Modern looks",
    rating: 3, 
    price: 999
},
]

const Perfume = () => {
  return (
    <div id='productPerfume' className=' mt-7'>
      <h2 className=' font-medium text-2xl pb-4'> Perfume</h2>
      <div className=' grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {productPerfume.map((item,index)=> (
            <ProductCard
             key={index}
             img= {item.img}
             title={item.title}
             desc= {item.desc}
             rating={item.rating}
             price={item.price}
            />
        ))}
      </div>
    </div>
  );
}

export default Perfume;
