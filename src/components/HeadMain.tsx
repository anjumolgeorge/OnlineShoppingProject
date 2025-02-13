import React from 'react';

const HeadMain = () => {
  return (
    <div className='border-b border-gray-200 py-6 bg-yellow-600'>
      <div className='container sm:flex justify-between items-center bg-yellow-300'>
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-black bg-yellow-800">
            Logo
        </div>

        <div className=' sm:w-[200px] md:w-[30%] relative'>
            <input className='border-gray-200 border p-2 px-6 rounded-lg w-full' 
            type='text'
            placeholder='Enter any product name...'/>
        </div>
      </div>
    </div>
  );
}

export default HeadMain;
