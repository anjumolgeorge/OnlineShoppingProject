import React from 'react';

const Testimonials = () => {
  return (
    <div className=' container pt-16 grid-cols-2'>
       <h1 className=' font-medium text-2xl pb-4'>Testimonials</h1>
       <div className=' grid lg: grid-cols-[300px,1fr] gap-4' >
        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className=' text-center flex flex-col items-center gap-1'>
              <img 
              className=' rounded-full inline-block'
              src='/profile-image.webp'
              width={80}
              height={80}
              alt='dp'
              />
              <h2 className=' text-gray-500 font-black text-[20px]'>Eva Joe</h2>
              <p>CEO & Founder Invision</p>
              <p className=' max-w-[200px] text-gray-500'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
        <div className=' bg-red-600 bg-[url(/banner-4.jpg)] bg-cover h-[600px] pb-2 rounded-2xl
        grid place-items-center'>
            <div></div>

        </div>
       </div>

    </div>
  );
}

export default Testimonials;
