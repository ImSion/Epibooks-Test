import React from 'react'
import CategoryButtons from './CategoryButtons'
import BooksRender from './BooksRender'



export default function Home({search, type, setType}) {
  return (
    <>
      
      <CategoryButtons setType={setType} />
      <BooksRender type={type} search={search} />
    </>
  )
}
