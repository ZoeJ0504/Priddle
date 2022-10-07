import React, { useState, useEffect } from 'react'
import SDDisplay from '../components/SDDisplay'
import SDForm from '../components/SDForm'

function SpotDifference({ user }) {
    const [post, setPost] = useState()
    const id = 2

    useEffect(() => {
        fetch(`/groups/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])

    return (
        <div>
            <SDForm user={user} />
            {post === undefined ? console.log("Information not found") : post.map(post => { return <SDDisplay text={post.text} /> })}
        </div>
    )
}

export default SpotDifference