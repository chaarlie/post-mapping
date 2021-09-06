import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'

const useCommentStyles = makeStyles({
    root: {
        flexDirection: 'column',
    }
})

function Comment({ name, email, body }) {
    const commentStyles = useCommentStyles()

    return (
        <List data-testid="comment-list" >
            <Grid container className={commentStyles.root} >
                <Grid item lg={6}>
                    <ListItemText data-testid="list-item-body"> {body}</ListItemText>
                </Grid>

                <Grid lg={3} item>
                    <ListItem data-testid="list-item-name"><strong>Name: </strong> {name}</ListItem>
                </Grid>

                <Grid item>
                    <ListItem data-testid="list-item-email"><strong>Email:</strong> {email}</ListItem>
                </Grid>
            </Grid>
        </List>
    )
}

export default Comment
