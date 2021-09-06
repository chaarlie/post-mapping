import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchData } from '../../app/api'
import { parsePosts } from '../../app/util'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetchData('posts')
    return await response
})
// there's no need to add reducers for Posts, since we're only reading data
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'

                let parsed = []

                // data could be null or undefined, because of database corruption, for instance
                if (action.payload?.length && action.payload.length > 0) {
                  parsed = parsePosts(action.payload)
                }

                state.posts = parsed
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
        })
    },
})

export default postsSlice.reducer
