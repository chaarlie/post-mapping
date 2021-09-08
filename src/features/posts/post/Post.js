import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { fetchPosts } from '../postSlice'
import { fetchComments, addComment } from '../../comments/commentsSlice'

import PostRow from '../post-row/PostRow'
import CommentBox from '../../comments/comment-box/CommentBox'
import AddComment from '../../comments/add-comment/AddComment'

const useTableHeadingStyle = makeStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.87)',
        color: 'rgba(239, 236, 236, 0.87)',
    }
})

const Post = () => {
    const posts = useSelector(state => state.posts.posts)
    const comments = useSelector(state => state.comments.comments)
    const postStatus = useSelector((state) => state.posts.status)
    const commentStatus = useSelector((state) => state.comments.status)
    const [commentsToShow, setCommentsToShow] = useState({})
    const [newComment, setNewComment] = useState(
        {
            email: '',
            name: '',
            body: '',
        }        
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (postStatus === 'idle') { // so this is the original state: no post ever loaded
            dispatch(fetchPosts())
        }
        if (commentStatus === 'idle') {
            dispatch(fetchComments())
        }
    }, [commentStatus, postStatus, dispatch])
    // used to select which comments should be displayed when clicking comment button
    const loadComments = index => setCommentsToShow({ ...commentsToShow, [index]: true })

    const handleCommentForm = index => {
        // This prevents submitting empty comments
        if (newComment.body && newComment.email && newComment.name) {
            dispatch(addComment({ index, newComment }))
            
            setNewComment(
                {
                    email: '',
                    name: '',
                    body: '',
                }            
            )
        }
    }

    const tableHeadingStyle = useTableHeadingStyle()

    return (
        posts.map((post, postIndex) => (
            <TableContainer  key={postIndex} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell data-testid="post-title" className={tableHeadingStyle.root}><h2>Title</h2></TableCell>
                            <TableCell className={tableHeadingStyle.root}><h2>Body</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map((el, k) => (
                            el ? <PostRow key={k} {...el} /> : null
                        ))}
                    </TableBody>
                </Table>

                <Button onClick={() => loadComments(postIndex)} variant="contained">Comments</Button>

                {commentsToShow[postIndex] && (
                    <>
                        <CommentBox comments={comments[postIndex]} />

                        <AddComment
                            handleCommentForm={handleCommentForm}
                            postIndex={postIndex}
                            newComment={newComment} 
                            setNewComment={setNewComment}
                        />
                    </>
                )}
            </TableContainer>
        ))
    )
}

export default Post
