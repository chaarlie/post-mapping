import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import {store} from '../../../app/store'
import { Provider } from 'react-redux';
import Post from './Post'


describe('Post', () => {
    it('should render the post container', () => {
        function Wrapper({ children }) {
            return <Provider store={store}>{children}</Provider>
        }
        
        const tree = rtlRender(<Post />, { wrapper: Wrapper })
        expect(tree).toBeTruthy()
    })
})