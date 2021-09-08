import React from 'react'
import { render } from '@testing-library/react'

import CommentBox from './CommentBox'

describe('CommentBox', () => {
    const comments = [
        { 
            name: 'Name 1', 
            email: 'name1@domain.com' , 
            body: 'text 1',
        },
        { 
            name: 'Name 2', 
            email: 'name2@domain.com' , 
            body: 'text 2',
        },
        { 
            name: 'Name 3', 
            email: 'name3@domain.com' , 
            body: 'text 3',
        },
    ]
   

    it('should render 3 comment elements', async () => {
        const tree = render(<CommentBox comments={comments} />)
        const commentList = await tree.findAllByTestId('comment-list')
        
        expect(commentList).toBeTruthy()
        expect(commentList.length).toBe(3)
    })


    it('should render 0 comments', async () => {
        const tree = render(<CommentBox comments={[]} />)
       expect(tree.children).toBeUndefined()
    })
})