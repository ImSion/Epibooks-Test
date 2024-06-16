import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import { useNavigate } from "react-router-dom"

export default function SingleBook({ book, selected, setSelected }) {

   let navigate = useNavigate();

   return (
       <div 
           className={`border-solid border-1 bg-pink-950 text-white rounded-xl w-[220px] text-center cursor-pointer transition ease-in-out delay-100 hover:translate-y-0 hover:scale-105 duration-300 
            ${selected === book.asin ? 'border-2 border-red-500' : ''}`} data-testid="card" >
           
        
           <img className="h-[300px] w-[220px] rounded-t-lg" onClick={() => setSelected(book.asin)} src={book.img} alt={book.title} />
           <div className='flex flex-col items-center text-center justify-center'>
                <h5 className='p-2 font-bold'>{book.title}</h5>
                <div className='flex justify-center p-1 gap-2'>
                    <p className='mr-5'>{book.category}</p>
                    <p>{book.price} €</p>             
                </div>
                { selected === book.asin && (
                    
                    <Button className='my-3'
                     onClick={() => navigate('/details/'+book.asin)}
                     >Book Details
                    </Button>
                )}
           </div>
       </div> 
   );
}
