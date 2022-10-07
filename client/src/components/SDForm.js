import React from "react";
import { useState } from "react"

function SDForm({ user }) {
    const [newPost, setNewPost] = useState({})

    const handleChange = (event) => {
        setNewPost({
            group_id: 2,
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
            .then(data => console.log(data))

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

export default SDForm