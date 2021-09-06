import React from 'react'
import { render } from '@testing-library/react'

import Comment from './Comment'

describe('Comment', () => {
    const commentOb = { 
        name: 'Carlos ', 
        email: 'carlos@gmail.com' , 
        body: 'lorem ipsum dolor',
    }

    it('should render comments successfully', async () => {
        const tree = render(<Comment {...commentOb} />)
        
        const name = await tree.getByTestId('list-item-name')
        const email = await tree.getByTestId('list-item-email')
        const body = await tree.getByTestId('list-item-body')
        
        expect(name.textContent).toMatch(/carlos/i)
        expect(email.textContent).toMatch(/carlos@gmail.com/i)
        expect(body.textContent).toMatch(/lorem ipsum dolor/i)
    })

    it('should not render comments', async () => {
        const tree = render(<Comment  />)
        
        const name = await tree.getByTestId('list-item-name')
        const email = await tree.getByTestId('list-item-email')
        const body = await tree.getByTestId('list-item-body')
        
        expect(name.textContent).not.toMatch(/carlos/i)
        expect(email.textContent).not.toMatch(/carlos@gmail.com/i)
        expect(body.textContent).not.toMatch(/lorem ipsum dolor/i)
    })
})