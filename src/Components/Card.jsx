import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Card ({name,image,id,price,type}) {
    let  dispatch =useDispatch();
  return (
    <div className='w-[250px] h-[350px] bg-white p-3 rounded-md flex flex-col gap-3 shadow-lg hover:border-2 border-orange-300 '>
        <div className='w-[100%] h-[60%] overflow-hidden'>
            <img src={image} alt="" className='object-cover rounded-md'/>
        </div>
        <div className='text-xl font-semibold'>
            {name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-lg font-bold text-orange-500'>Rs {price}/-</div>
            <div className='flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold'>
                {type=="veg"?<LuLeafyGreen/>:<GiChickenOven/>}
                <span>{type}</span>
            </div>
        </div>
        <button className='w-full p-3 rounded-md bg-orange-500 text-white hover:bg-orange-400 
        transition-all cursor-pointer duration-200' onClick={()=>dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}))}>Add to dish</button>
    </div>
  )
}

export default Card