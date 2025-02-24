import React from 'react';
import ProductCard from './ProductCard';
 const productsData = [{
    img:"/shopping4.webp",
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
    img:"/heels2.webp",
    title:"Heels",
    desc:"Smoothy Walk",
    rating: 4, 
    price: 599
},
{
    img:"/shopping5.jpg",
    title:"Dress",
    desc:"Modern looks",
    rating: 4, 
    price: 999
},
{
    img:"/shoe3.webp",
    title:"Sports",
    desc:"Running Shoes-Black",
    rating: 4, 
    price: 1999
},
{
    img:"/perfume7.jpg",
    title:"Perfume",
    desc:"Smoothy Smell",
    rating: 4, 
    price: 599
},
{
    img:"/watches7.webp",
    title:"Watches",
    desc:"Smart watches Vital Plus",
    rating: 4, 
    price: 4999
},
{
    img:"/perfume8.jpg",
    title:"Perfume",
    desc:"Smoothy Smell",
    rating: 4, 
    price: 599
}


];

const NewProducts = () => {
  return (
    <div id='newproducts'>
        <div className="container pt-16">
            <h2 className=' font-medium text-2xl pb-4'>New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item,index)=>(
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
    </div>
  );
}

export default NewProducts;
