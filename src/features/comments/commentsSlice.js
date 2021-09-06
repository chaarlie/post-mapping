import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../app/api'
import { parseComments } from '../../app/util'

const initialState = {
    comments: [],
    status: 'idle',
    error: null,
}

export const fetchComments = createAsyncThunk('posts/fetchComments', async () => {
    const response = await fetchData('comments')
    return await response
})
  
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state, action) {
            const { index, newComment } = action.payload
            state.comments[index].push({...newComment});
      }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchComments.fulfilled,   (state, action) => {
                state.status = 'succeeded'
              
                let parsed = []
              
                if (action.payload?.length && action.payload.length > 0) {
                    parsed =  parseComments( action.payload)
                }

                state.comments = state.comments.concat(parsed)
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
      },
})

export default commentsSlice.reducer

export const { addComment } = commentsSlice.actions

 