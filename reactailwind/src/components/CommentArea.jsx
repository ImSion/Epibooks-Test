import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';


const URLCommentsAPI = 'https://striveschool-api.herokuapp.com/api/books/';

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(URLCommentsAPI+asin+"/comments/", {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVmNTRlNTA3ZjBkMTAwMTUzZDhjYTgiLCJpYXQiOjE3MTc1MjM2ODUsImV4cCI6MTcxODczMzI4NX0.l9BrlcBl1JHKDdifvRZzEbacY9GAq08GWflkvKH073w' }
        }).then( response => response.json() )
          .then( data => {
                  setComments(data);
                })

                
    }, [asin])

  return (
    
    <div data-testid="comment-area" className=''>
        <AddComment elementId={asin} comments={comments} setComments={setComments} />
        <CommentList comments={comments} />
    </div>
  )
}