import React from 'react'
import { useParams } from 'react-router-dom'
import AllBooks from '../Books/AllBooks.json'
import CommentArea from './CommentArea';


export default function BookDetail() {

    const { asin } = useParams();
    const book = AllBooks.find( b => b.asin === asin); 
    
    console.log(book)
  return (
    <>
      <div className='p-5 flex bg-slate-600 items-center justify-center h-[700px]'>
          <div 
               className="border-solid border-1 bg-pink-950 text-white rounded-xl w-[220px] text-center cursor-pointer transition ease-in-out delay-100 hover:translate-y-0 hover:scale-105 duration-300" >
            
               <img className="h-[300px] w-[220px] rounded-t-lg" src={book.img} alt={book.title} />
               <h5 className='p-2 font-bold'>{book.title}</h5>
               <div className='flex justify-center p-1 gap-2'>
                   <p>{book.category}</p>
                   <p>{book.price}€</p>
               </div>
               
              
           </div>
           <div className='w-[250px] flex flex-col justify-center items-center text-center absolute right-3'>
                  <CommentArea asin={book.asin} />
           </div>
      </div>
      
    </>    
  )
}