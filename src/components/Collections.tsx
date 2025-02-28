import React from 'react';
import ProductCard from './ProductCard';

const NewProducts =[{
    img:"/watches3.webp",
    title:"watch",
    desc:"Modern looks",
    rating: 2, 
    price: 399
},
{
    img:"/watches4.webp",
    title:"watch",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{
    img:"/watches5.webp",
    title:"watch",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{
    img:"/watches6.webp",
    title:"watches",
    desc:"Modern looks",
    rating: 4, 
    price: 399
},
{
    img:"/watches7.webp",
    title:"watches",
    desc:"Modern looks",
    rating: 5, 
    price: 399
},{
    img:"/shoe1.webp",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe2.webp",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe3.webp",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe4.jpg",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe5.jpg",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe6.jpg",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},{
    img:"/shoe7.jpg",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{
    img:"/shoe8.jpg",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{
    img:"/shoe9.webp",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{   img:"/shoe10.webp",
    title:"shoe",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
{
    img:"/heels1.webp",
    title:"footwear",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/heels2.webp",
    title:"footwear",
    desc:"Modern looks",
    rating: 4, 
    price: 599
},{
    img:"/heels3.webp",
    title:"footwear",
    desc:"Modern looks",
    rating: 3, 
    price: 499
},{
    img:"/heels4.webp",
    title:"footwear",
    desc:"Modern looks",
    rating: 5, 
    price: 999
},{
    img:"/heels5.webp",
    title:"footwear",
    desc:"Modern looks",
    rating: 3, 
    price: 399
},
]

const Watches = () => {
  return (
    <div id='newProducts mt-14'>
     <h2 className=' font-medium text-2xl pb-4'> newly collections</h2>
      <div className=' grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>{NewProducts.map((item,index)=>(
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

export default Watches;
