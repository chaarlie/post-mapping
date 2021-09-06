import React from 'react'
import { render } from '@testing-library/react'

import AddComment from './AddComment'

describe('AddComment', () => {
    it('should render successfully', () => {
        const newComment = {
            email: '',
            name: '',
            body: '',
        }     
        
        const element = render(
            <AddComment 
                newComment={newComment}
                setNewComment={() => {}}
                handleCommentForm={()=> {} }
                postIndex={1}
            />)
        expect(element).toBeTruthy()
    })
})