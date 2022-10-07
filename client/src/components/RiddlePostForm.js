import React, { useState } from "react";


function RiddlePostForm({ user }) {
    const [newPost, setNewPost] = useState({})

    const handleChange = (event) => {
        setNewPost({
            group_id: 1,
            user_id: user.id,
            text: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit" onChange={handleChange}>Post</button>
            </form>
        </div>
    )
}

export default RiddlePostForm