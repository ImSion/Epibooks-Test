import { ListGroupItem } from 'flowbite-react'
import React from 'react'

export default function SingleComment({comment}) {

  const removeComment = (comment) => {
    /* console.log(comment) */
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + comment._id, {
      method: 'DELETE',
      headers: { 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVmNTRlNTA3ZjBkMTAwMTUzZDhjYTgiLCJpYXQiOjE3MTc1MjM2ODUsImV4cCI6MTcxODczMzI4NX0.l9BrlcBl1JHKDdifvRZzEbacY9GAq08GWflkvKH073w' 
      }
    }).then(response => response.json())
      .then(data => {
        // se tutto va a buon fine
        console.log(data)
        alert('Il commento è stato eliminato!')
      })
      .catch(error => console.error(error))
  }

  return (
    <ListGroupItem className='p-1' data-testid="mycomment">
      {comment.comment} voto: {comment.rate}
      <button variant="outline-danger" className='absolute right-7' onClick={() => removeComment(comment)}> x</button>  
    </ListGroupItem>
  )
}