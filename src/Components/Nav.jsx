import React, { useState } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
    const [input, setInput] = useState("");

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            {/* Logo */}
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-orange-500' />
            </div>

            {/* Search Bar */}
            <form 
                className='w-[45%] md:w-[70%] h-[60px] bg-white items-center flex px-5 gap-5 rounded-md shadow-md' 
                onSubmit={(e) => e.preventDefault()}
            >
                <IoSearch className='text-orange-500 w-[20px] h-[20px]' />
                <input
                    className='w-[100%] outline-none text-[12px] md:text-[15px]'
                    type="text"
                    placeholder='Search Items...'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>

            {/* Cart Icon */}
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
                <span className='absolute top-0 right-2 text-orange-500 font-bold text-[16px]'>0</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-orange-500' />
            </div>
        </div>
    );
}

export default Nav;
