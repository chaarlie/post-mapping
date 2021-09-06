import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Post from './features/posts/post/Post'

// using material ui to keep styles with components. I consider this one a straightforward solution for styling
const useStyles = makeStyles( {
  root: {
    fontFamily: 'popins',
  }
});

function App() {
    const styles = useStyles()

    return (
      <Container className={styles.root}>
        <Post />
      </Container>
    )
}

export default App
