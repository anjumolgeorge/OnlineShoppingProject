import React from 'react';
import ProductCard from './ProductCard';

const products = [{
    img:"/shopping8.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping9.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping10.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping11.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
     img:"/shopping12.jpg",
     title:"Dress",
     desc:"Modern looks",
     rating: 4, 
     price: 999
},
{
    img:"/shopping13.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shopping14.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},]

const Gents = () => {
  return (
    <div id='products' className=' mt-14'>
      <h2 className='font-medium text-2xl pb-4'>Men's stylish looks</h2>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
       {products.map((item, index)=> (
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
  );
}

export default Gents;
