import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Comment from '../comment/Comment'

const useCommentBoxStyles = makeStyles({
    root: {
        height: '300px',
        overflowY: 'scroll',
    }
})

const CommentBox = ({ comments }) => {
    const commentBoxStyles = useCommentBoxStyles()

    return (
        <Box className={commentBoxStyles.root} >
            {comments && comments.map((comment, i) => (
                <Comment key={i} {...comment} />
            ))}
        </Box>
    )
}

export default CommentBox