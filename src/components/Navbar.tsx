import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
    <Link className=' navbar_link relative' href="#">
    HOME
    </Link>
    <Link className=' navbar_link relative' href="#">
    CATEGORIES
    </Link>
    <Link className=' navbar_link relative' href="#">
    MEN'S
    </Link>
    <Link className=' navbar_link relative' href="#">
    WOMEN'S
    </Link>
    <Link className=' navbar_link relative' href="#">
    PERFUME
    </Link>
    <Link className=' navbar_link relative' href="#">
    OFFERS
    </Link>
            </div>
        </div>
 </div>
     
   
  );
}

export default Navbar;
