// import React, { useContext, useState } from 'react'
// import Nav from '../components/Nav'
// import Card from '../components/Card'
// import Categories from '../Category'
// import { food_items } from "../food"
// import { dataContext } from '../context/userContext'
// import { RxCross2 } from "react-icons/rx";
// import Card2 from '../components/Card2'
// import { useSelector } from 'react-redux'


// function Home() {

//  // Categoey vise use filter
//     let {cate, setCate, input, showCard, setShowCard} = useContext (dataContext)
    
//     function filter (Category) {
//        if (Category === "All"){
//           setCate(food_items)
//        }else {
//         let newList = food_items.filter((item)=>(item.food_category === Category))
//         setCate(newList)
//        }
//     }
//     let items = useSelector(state=>state.cart)
//     let subtotal = items.reduce ((total,item)=>total+item.price,0)
//     let deliveryFee = 20;
//     let taxes = subtotal*0.5/100;
//     let total = Math.floor(subtotal+deliveryFee+taxes)
    
//   return (
//     <div className='bg-slate-200 w-full min-h-[100vh]'>
//         <Nav/>
//         {!input? <div className='flex flex-wrap justify-center items-center
//               gap-5 w-[100%]'>
//           {Categories.map((item)=>{
//              return <div className='w-[140px] h-[150px] bg-white
//              flex flex-col items-start gap-5 p-5 justify-start text-[20px]
//               font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200
//               cursor-pointer transition-all duration-200 'onClick={()=> filter(item.name)}>
//                  {item.icon}
//                  {item.name}
//              </div>
             
//          })}
//         </div>: null}
//            {/* Card */}
//         <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
//           {cate.map((item)=>(
//             <Card 
//               name={item.food_name}
//               image={item.food_image}
//               price={item.price}
//               id={item.id}
//               qty={item.food_quantity}
//               type={item.food_type}/>
//           ))}
//         </div>

//         <div className={`w-full md:w-[40vw] h-screen fixed top-0 right-0 bg-white shadow-xl p-6
//         transition-all duration-500 ${showCard ? "translate-x-0": "translate-x-full"}
//         `}>
//          <header className='w-[100%] flex justify-between items-center'>
//            <span className='text-green-500 text-[18px] font-semibold'>Order items</span>
//            <RxCross2  className='w-[20px] h-[20px] text-green-500 text-[18px] font-semibold
//            cursor-pointer hover:text-gray-600' onClick={()=> setShowCard(false)}/>
//          </header>
//         {/* cart section */}
//           <div className='w-full mt-9 flex flex-col gap-8 overflow-auto flex-1'>
//              {items.map((item)=>(
//               <Card2 name = {item.name}
//                price={item.price} 
//                image={item.image}
//                 id={item.id}
//                qty={item.qty}/>
//              ))}
//           </div>
//           {/* card2 price */}
//           <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col
//           gap-2 p-8'>
//             {/* subtotal */}
//               <div className='w-full flex justify-between items-center'>
//                  <span className='text-lg text-gray-600 font-semibold'>
//                   Subtotal
//                  </span>
//                   <span className='text-green-400 font-semibold text-lg'>
//                  Rs {subtotal} -/
//                   </span>
//               </div>
//             {/* delivery */}
//               <div className='w-full flex justify-between items-center'>
//                  <span className='text-lg text-gray-600 font-semibold'>
//                   DeliveryFee
//                  </span>
//                   <span className='text-green-400 font-semibold text-lg'>
//                 Rs {deliveryFee} -/
//                   </span>
//               </div>
//             {/* taxes */}
//               <div className='w-full flex justify-between items-center'>
//                  <span className='text-lg text-gray-600 font-semibold'>
//                   Taxes
//                  </span>
//                   <span className='text-green-400 font-semibold text-lg'>
//                Rs {taxes} -/
//                   </span>
//               </div>
//           </div>
//             {/* totaol */}
//            <div className='w-full flex justify-between items-center'>
//                  <span className='text-2xl text-gray-600 font-semibold p-9 '>
//                   Totel
//                  </span>
//                   <span className='text-green-400 font-semibold text-2xl'>
//                Rs {total} -/
//                   </span>
//               </div>
//          <div className="w-full flex justify-center">
//            <button className='w-[80%] p-3 rounded-lg bg-green-500
//            text-gray-700 hover:bg-green-300 transition-all font-bold'>
//              Place Order
//            </button>
//         </div>

//         </div>
//     </div>
//   )
// }

// export default Home
import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Categories from '../Category'
import { food_items } from "../food"
import { dataContext } from '../context/userContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {

 let {cate, setCate, input, showCard, setShowCard} = useContext (dataContext)
    
 function filter (Category) {
   if (Category === "All"){
     setCate(food_items)
   } else {
     let newList = food_items.filter(
       (item)=>(item.food_category === Category)
     )
     setCate(newList)
   }
 }

 let items = useSelector(state=>state.cart)
 let subtotal = items.reduce ((total,item)=>total+item.qty*item.price,0)
 let deliveryFee = 20;
 let taxes = subtotal*0.5/100;
 let total = Math.floor(subtotal+deliveryFee+taxes)
    
 return (
  <div className='bg-slate-200 w-full min-h-[100vh]'>
   <Nav/>

   {!input ?
    <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
     {Categories.map((item)=>(
      <div
       className='w-[140px] h-[150px] bg-white flex flex-col items-start
       gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600
       rounded-lg shadow-xl hover:bg-green-200 cursor-pointer
       transition-all duration-200'
       onClick={()=> filter(item.name)}
      >
       {item.icon}
       {item.name}
      </div>
     ))}
    </div>
   : null}

   <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
    {cate.length>1?cate.map((item)=>(
     <Card
      name={item.food_name}
      image={item.food_image}
      price={item.price}
      id={item.id}
      qty={item.food_quantity}
      type={item.food_type}
     />
    )):<div className='text-center text-2xl text-green-500 font-semibold pt-5'>No Dish Found</div>}
   </div>

   {/* ✅ ONLY FIX IS HERE */}
   <div className={`w-full md:w-[40vw] h-screen fixed top-0 right-0
   bg-white shadow-xl p-6 flex flex-col
   transition-all duration-500
   ${showCard ? "translate-x-0" : "translate-x-full"}`}>

    <header className='w-[100%] flex justify-between items-center'>
     <span className='text-green-500 text-[18px] font-semibold'>
      Order items
     </span>
     <RxCross2
      className='w-[20px] h-[20px] text-green-500 cursor-pointer'
      onClick={()=> setShowCard(false)}
     />
    </header>
    {/* SCROLLABLE CART */}
    {items.length>0?   <>
    <div className='w-full mt-9 flex flex-col gap-8 overflow-auto flex-1'>
     {items.map((item)=>(
      <Card2
       name={item.name}
       price={item.price}
       image={item.image}
       id={item.id}
       qty={item.qty}
      />
     ))}
    </div>

    <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7
    flex flex-col gap-2 p-8'>
     <div className='flex justify-between'>
      <span>Subtotal</span>
      <span>Rs {subtotal}</span>
     </div>
     <div className='flex justify-between'>
      <span>DeliveryFee</span>
      <span>Rs {deliveryFee}</span>
     </div>
     <div className='flex justify-between'>
      <span>Taxes</span>
      <span>Rs {taxes}</span>
     </div>
    </div>

    <div className='flex justify-between items-center p-9'>
     <span className='text-2xl font-semibold'>Total</span>
     <span className='text-2xl font-semibold'>Rs {total} /-</span>
    </div>

    <div className="w-full flex justify-center">
     <button className='w-[80%] p-3 rounded-lg bg-green-500
     text-gray-700 hover:bg-green-300 transition-all font-bold'onClick={()=>
     {toast.success("Order Place")}
     }>
      Place Order
     </button>
    </div>
    </>:
    <div className='text-center text-2xl text-green-500 font-semibold pt-5'>
       Empty Cart
       </div>}
 
   </div>
  </div>
 )
}

export default Home
