import React, { useState } from 'react'

export default function AddComment({elementId, comments, setComments}) {

  const [review, setReview] = useState('')
  const [rate, setRate] = useState(0)
  const newComment = {comment: review, rate: rate, elementId: elementId}

  // let setCommentHandler = (e) => {
  //   setComments({
  //     ...comments,
  //     comment: e.target.value
  //   })
  // }

  // let setRateHandler = (e) => {
  //   setComments({
  //     ...comments, 
  //     rate: e.target.value
  //   })
  // }

  let sendComment = (e) => {
    e.preventDefault()
    console.log(comments)
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVmNTRlNTA3ZjBkMTAwMTUzZDhjYTgiLCJpYXQiOjE3MTc1MjM2ODUsImV4cCI6MTcxODczMzI4NX0.l9BrlcBl1JHKDdifvRZzEbacY9GAq08GWflkvKH073w' 
      }
    }).then(response => response.json())
      .then(data => {
        // se tutto va a buon fine
        console.log(data)
        alert('Il commento è stato aggiunto!')
        setComments([...comments, data])
        setReview('')
        setRate(0)
      })
      .catch(error => console.error(error))
  }

  return (
    <form className='w-[230px] text-center'>
        <div className='p-2'>
            <label for="small-input" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Recensione</label>
            <input 
            type="text" 
            placeholder="Inserisci qui il tuo commento"
            onChange={(e) => setReview(e.target.value)}
            value={review} 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>

        <div className='p-2'>
            <label 
                for="small-input" 
                aria-label='default select example' 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    
                    
              <form class="max-w-sm mx-auto p-2">
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Rate</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setRate(parseInt(e.target.value))}
                value={rate}>
                  <option selected value="0">Lascia una valutazione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </label>    
        </div>

        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
        onClick={sendComment}>Aggiungi Recensione
        </button>


    </form>
  )
}




