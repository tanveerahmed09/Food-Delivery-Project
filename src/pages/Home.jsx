import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Categories from '../Category'
import { food_items } from "../food"
import { dataContext } from '../context/userContext'
import { RxCross2 } from "react-icons/rx";


function Home() {

 // Categoey vise use filter
    let {cate, setCate, input, showCard, setShowCard} = useContext (dataContext)
    function filter (Category) {
       if (Category === "All"){
          setCate(food_items)
       }else {
        let newList = food_items.filter((item)=>(item.food_category === Category))
        setCate(newList)
       }
    }

  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
        <Nav/>
        {!input? <div className='flex flex-wrap justify-center items-center
              gap-5 w-[100%]'>
          {Categories.map((item)=>{
             return <div className='w-[140px] h-[150px] bg-white
             flex flex-col items-start gap-5 p-5 justify-start text-[20px]
              font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200
              cursor-pointer transition-all duration-200 'onClick={()=> filter(item.name)}>
                 {item.icon}
                 {item.name}
             </div>
             
         })}
        </div>: null}
        
           {/* Card */}
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {cate.map((item)=>(
            <Card name={item.food_name} 
            image={item.food_image} 
            price={item.price}
            id={item.id} 
            type={item.food_type}/>
          ))}
        </div>

        <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6
        transition-all duration-500 ${showCard ? "translate-x-0": "translate-x-full"}
        `}>
         <header className='w-[100%] flex justify-between items-center'>
           <span className='text-green-500 text-[18px] font-semibold'>Order items</span>
           <RxCross2  className='w-[20px] h-[20px] text-green-500 text-[18px] font-semibold
           cursor-pointer hover:text-gray-600' onClick={()=> setShowCard(false)}/>
         </header>
        </div>

    </div>
  )
}

export default Home