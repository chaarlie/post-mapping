// both functions are similar, however the keys extracted are totally different
// this could be improved with regex mapping to an object maybe
export const parsePosts = posts => {
    return posts.reduce((container, post) => {
        if (post) {
            const { id, userId, title, body } = post
            
            if (!container[userId]) container[userId] = []
            container[userId].push({ id, title, body })
        }
        return container
    }, [])
}

export const parseComments = comments => {
    return comments.reduce((container, comment) => {
        if (comment) {
            const { postId, name, email, body } = comment
            // every comment uses the id from post as is foreign key
            if (!container[postId]) container[postId] = []
    
            container[postId].push({ name, email, body })  // no need to add more data
        }
        return container
    }, [])
}
