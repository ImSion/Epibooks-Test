import React from 'react'
import SingleComment from './SingleComment';
import { ListGroup } from 'flowbite-react';

export default function CommentList({comments}) {
  return (
    <ListGroup className='p-1' data-testid="comment">
        {comments.map(comment => <SingleComment key={comment._id} comment={comment} />)}
    </ListGroup>
  )
}