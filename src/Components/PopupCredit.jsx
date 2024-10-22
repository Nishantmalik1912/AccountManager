import React, { useState } from 'react'


const PopupCredit = ({setData ,data ,setPop , Reason }) => {

const [product , setProduct] = useState('')
const [cost , setCost] = useState('')
const [date , setDate] = useState('')



const closeHandler = () =>{
  setPop(0)
} 


const submithandler=(e)=>{
  if(product!= '' && cost !='' && date!=''){
  e.preventDefault();
  setData([...data , {product , cost , date} ]);
  setPop(false)

  
}
}


  return (
 <div className='fixed inset-0 backdrop-blur-xl flex justify-center items-center '> 
    <div className='items-center justify-center flex bg-blue-400 w-[500px] rounded-xl '>
     <div className='justify-center'>
      <form onSubmit={submithandler}>
        <input type='text' placeholder={Reason} className='p-3 w-96 rounded-lg block mt-5' onChange={(e)=>{setProduct(e.target.value)}} value={product}/>
        <input type='number'  onChange={(e)=>{setCost(e.target.value)}} value={cost} placeholder=' Amount ' className='p-3 w-96  block mt-5 rounded-lg 
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 
        [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0' />
        <input type='date' placeholder='Date of the addition'  onChange={(e)=>{setDate(e.target.value)}} value={date} className='p-3 w-96  block mt-5 rounded-lg ' />
       <button className='rounded-lg bg-green-400 my-5 px-10 py-2'>Submit</button>
       <button onClick={closeHandler} className='rounded-lg bg-red-400  my-5 px-10 py-2'>Back</button>
      </form>
    </div>
   </div>
 </div>
  )
}

export default PopupCredit