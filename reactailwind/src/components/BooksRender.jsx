import React from 'react'
import fantasy from '../Books/fantasy.json'
import history from '../Books/history.json'
import horror from '../Books/horror.json'
import scifi from '../Books/scifi.json'
import romance from '../Books/romance.json'
import AllTheBooks from './AllTheBooks'


export default function BooksRender({search, type}) {
  return (
    <>
     <div className='bg-slate-800 dark:bg-slate-950'>
      {type === 'fantasy' && <AllTheBooks search={search} books={fantasy} />}
      {type === 'history' && <AllTheBooks search={search} books={history} />}
      {type === 'horror' && <AllTheBooks search={search} books={horror} />}
      {type === 'scifi' && <AllTheBooks search={search} books={scifi} />}
      {type === 'romance' && <AllTheBooks search={search} books={romance} />}
     </div>
    </>
  )
}
