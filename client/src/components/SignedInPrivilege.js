import React, { useState } from "react";

function SignedInPrivilege({ currentPost }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updatedText, setUpdatedText] = useState("")


    const handleClick = () => {
        setUpdatePost(!updatePost)
    }

    const handleChange = (event) => {
        setUpdatedText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`/posts/${currentPost}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedText),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <button onClick={handleClick}>Update</button>
            <button>Delete</button>
            {updatePost === true ?
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} />
                    <button>Update!</button>
                </form> : ""}

        </div>
    )
}

export default SignedInPrivilege