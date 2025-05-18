import React from 'react';

const Navbar = () => {

    const links = <>
           <li><a>Home</a></li>
           <li><a>About Us</a></li>
           <li><a>Features</a></li>
           <li><a>Pricing</a></li>
           <li><a>FAQ</a></li>
           <li><a>Blog</a></li>
    </>

    return (
        <div className="navbar justify-center bg-[#1c1e53] text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1c1e53] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                         <button className=' btn shadow-none rounded-3xl px-5 py-5 bg-transparent border-gray-500 border-2 text-white'>Contact Us</button>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Finsweet</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu items-center menu-horizontal px-1">
                    {links}
                    <button className=' btn shadow-none rounded-3xl px-5 py-5 bg-transparent border-gray-500 border-2 text-white'>Contact Us</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;