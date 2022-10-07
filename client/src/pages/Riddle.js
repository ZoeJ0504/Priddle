import React, { useEffect, useState } from 'react'
import RiddlePostForm from '../components/RiddlePostForm'

function Riddle({ user }) {
    const [posts, setPost] = useState([])
    const id = 1

    useEffect(() => {
        fetch(`/groups/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])

    return (
        <div>
            <RiddlePostForm user={user} />
            {posts.map(post => { return })}
        </div>
    )
}

export default Riddle