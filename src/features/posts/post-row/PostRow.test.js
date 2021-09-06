import React from 'react'
import { render } from '@testing-library/react'

import PostRow from './PostRow'

describe('PostRow', () => {
    it('should render successfully', () => {
        const { getByText } = render(<PostRow   title='some title' body='some body' />)
        expect(getByText(/some title/i)).toBeTruthy()
        expect(getByText(/some body/i)).toBeTruthy()
    })
    it('should render dashes if empty', () => {
        const { getAllByText } = render(<PostRow     />)
        expect(getAllByText(/---/i)).toHaveLength(2)
    })
})