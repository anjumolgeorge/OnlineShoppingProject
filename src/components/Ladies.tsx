import React from 'react';
import ProductCard from './ProductCard';

const productList = [{
    img:"/shopping1.webp",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping2.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 5, 
    price: 999
},
{
    img:"/shopping3.webp",
    title:"Dress",
    desc:"Modern looks",
    rating: 3, 
    price: 999
},
{
    img:"/shopping4.webp",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping5.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 5, 
    price: 999
},{
    img:"/shopping6.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping7.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 2, 
    price: 999
}]

const Ladies = () => {
  return (
    <div id="productList" className=' mt-7'>
    <h2 className=' font-medium text-2xl pb-4'>womens outfits</h2>
    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {productList.map((item, index)=> (
           <ProductCard
           key={index}
           img={item.img}
           title={item.title}
           desc={item.desc}
           rating={item.rating}
           price={item.price}/>
        ))}
    </div>
    </div>
  );
}

export default Ladies;
