// Questo componente sarà il "contenitore" di tutti i libri, occupandosi di renderizzarli anche in base alla ricerca
import { useState } from "react";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook"



export default function AllTheBooks(props) {
const [selected, setSelected] = useState(false);
  
console.log(props.books);
  return (
    <main className="flex">

      <div className='flex flex-wrap grid-cols-4 gap-6 mx-2 justify-between p-2'>
        
      {props.books

          .filter(book => book.title.toLowerCase().includes(props.search))
          .map(book => ( <SingleBook selected={selected} setSelected={setSelected} key={book.asin} book={book}/>
                   
        ))}
        
      </div>

      <CommentArea asin={selected} />


    </main>
  )
}

