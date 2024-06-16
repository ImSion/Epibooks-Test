import { useState } from 'react'

export default function CategoryButtons({setType}) {
    

  return (
    <div className='bg-sky-900 dark:bg-gray-900'>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 me-2 mb-2 mt-3 w-[100px] h-[30px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-2"
      onClick={() => setType('fantasy')} >Fantasy</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 me-2 mb-2 mt-3 w-[100px] h-[30px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-2"
      onClick={() => setType('history')} >History</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 me-2 mb-2 mt-3 w-[100px] h-[30px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-2"
      onClick={() => setType('horror')} >Horror</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 me-2 mb-2 mt-3 w-[100px] h-[30px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-2"
      onClick={() => setType('scifi')} >Scifi</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 me-2 mb-2 mt-3 w-[100px] h-[30px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-2"
      onClick={() => setType('romance')} >Romance</button>
    </div>
  )
}
