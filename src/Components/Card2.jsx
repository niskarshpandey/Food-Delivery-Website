import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';

import { IncrementQty } from '../redux/cartSlice';
import { DecrementQty } from '../redux/cartSlice';

function Card2({ name, image, price, id, qty }) {
  let dispatch=useDispatch()

  return (
    <div className='w-full h-[120px] p-2 shadow-lg shadow-gray-400 rounded-lg flex justify-between items-center'>
      <div className= 'w-[60%] h-full flex gap-3'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5' > 
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-orange-400 text-xl '>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-orange-400 hover:text-black hover:bg-gray-400'onClick={()=>{
                qty>1?dispatch(DecrementQty(id)):1
              }}
              >-</button>
              <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center  text-orange-400 hover:text-black'>{qty}</span>
              <button className='w-[30%] h-full bg-white flex justify-center items-center  text-orange-400 hover:text-black hover:bg-gray-400'
              onClick={()=>{
                dispatch(IncrementQty(id))
              }}>+</button>

          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-1">

{/* <span className='text-xl text-orange-400 font-semibold '>Price</span>
 */}
 <span className='text-xl text-orange-400 font-semibold '>
   ₹{price * qty}
</span>
<RiDeleteBin6Line className='inline ml-2 text-2xl text-red-600 hover:text-black cursor-pointer'onClick={()=>dispatch(RemoveItem(id))}/>



      </div>
    </div>
  )
}

export default Card2
