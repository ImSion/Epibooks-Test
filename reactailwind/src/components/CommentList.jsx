import React from 'react'
import SingleComment from './SingleComment';
import { ListGroup } from 'flowbite-react';

export default function CommentList({comments}) {
  return (
    <ListGroup className='p-1 w-[300px] flex flex-col items-center' data-testid="comment">
        {comments.map(comment => <SingleComment key={comment._id} comment={comment} />)}
    </ListGroup>
  )
}