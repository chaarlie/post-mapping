import React from 'react'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PostRow = ({ title = '---', body = '---' }) => {
    return (
        <TableRow>
            <TableCell><h3>{title}</h3></TableCell>
            <TableCell>{body}</TableCell>
        </TableRow>
    )
}

export default PostRow