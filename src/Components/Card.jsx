import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = {
      id,
      name,
      price,
      image,
      qty: 1,
    };
    dispatch(AddItem(newItem));
    toast.success("Item Added!", { position: "top-right" });

  };

  return (
    <div className='w-[250px] h-[350px] bg-white p-3 rounded-md flex flex-col gap-3 shadow-lg hover:border-2 border-orange-300'>
      {/* Image Section */}
      <div className='w-full h-[60%] overflow-hidden rounded-md'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>

      {/* Name */}
      <div className='text-xl font-semibold'>
        {name}
      </div>

      {/* Price and Type */}
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-orange-500'>
          Rs {price}/-
        </div>
        <div className='flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      {/* Add Button */}
      <button
        className='w-full p-3 rounded-md bg-orange-500 text-white hover:bg-orange-400 
        transition-all cursor-pointer duration-200'
        onClick={handleAdd}
      >
        Add to dish
      </button>
    </div>
  )
}

export default Card
