import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useAddCommentStyles = makeStyles({
    root: {
        marginTop: '12px',
        width: '99%',
    },
    commentFields: {
        flexDirection: 'column'
    }
})

const AddComment = ({ newComment, setNewComment, handleCommentForm, postIndex }) => {
    const addCommentStyles = useAddCommentStyles()

    return (
        <>
            <Box>
                    <Button onClick={() => handleCommentForm(postIndex)} className={addCommentStyles.root} variant="contained" color="primary">Add Comment</Button>
            </Box>
            <form >
                <textarea
                    name="comment"
                    value={newComment.body}
                    onChange={e => setNewComment({ ...newComment, body: e.target.value })} rows={10}
                    className={addCommentStyles.root}>
                </textarea>
                <Grid container className={addCommentStyles.commentFields}>
                    <TextField
                        value={newComment.name}
                        onChange={e => setNewComment({ ...newComment, name: e.target.value })}
                        label="Name" 
                        data-testid="new-comment-input"
                        />
                    <TextField
                        value={newComment.email}
                        onChange={e => setNewComment({ ...newComment, email: e.target.value })}
                        label="Email"
                        data-testid="new-comment-email"
                        />
                </Grid>
            </form>
        </>
    )
}

export default AddComment