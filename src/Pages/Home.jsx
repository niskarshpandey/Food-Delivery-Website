import React from 'react'
import Nav from '../Components/nav'
import Categories from '../Category'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] ml-6'>
      {/* Navigation Bar */}
      <Nav/>

      {/* Categories Horizontal Scroll */}
      <div className='flex overflow-x-auto gap-4 p-4 pl-6 scrollbar-hide'>
        {Categories.map((item) => {
          return (
               <div 
      className="w-[140px] h-[130px] bg-white flex flex-col justify-center items-center 
                 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300"
    >
      {item.image}
      <span className="mt-2 font-semibold">{item.name}</span>
    </div>

          )
        })}
      </div>
    </div>
  )
}

export default Home
