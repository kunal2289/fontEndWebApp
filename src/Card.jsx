import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const Card = ({id, name , price, img, rating }) => {
  return ( 
        <div className=' p-6 m-5 w-[250px] text-sm gap-2  justify-center  align-middle flex flex-col bg-white text-black rounded-lg'>
              <img className='w-[160px] h-20 transition-transform duration-300 hover:scale-x-110 cursor-grab' src={img} alt="logo"></img>

              <div className='flex justify-between'>
                   <p className='text-sm'> {name.slice(0,20)}... </p>
                   <p className='flex text-green-700 font-semibold  text-sm'> <FaRupeeSign className='mt-1'/> {price}</p>
              </div>
              
              <div className='flex justify-between'>
                   <p className='flex text-green-700 font-semibold'> <FcRating className='mt-1'></FcRating>  {rating}</p>
                   <button className='bg-red-500 text-sm px-3 rounded-md text-white font-semibold hover:bg-green-700 ' > Add</button>
              </div>
        </div>
  )
}

export default Card