import React from 'react'

export default function SearchBooks({ search, handleSearch }) {
  return (
    <div>
      
      <form class="max-w-sm mx-auto text-center">
        <div class="mb-5">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input 
            type="search" 
            placeholder="Cerca un libro..."
            value={search}
            onChange={handleSearch}
            name="largeinput" 
            className="w-[100%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[34px]"/>
        </div>
      </form>

    </div>
  )
}
