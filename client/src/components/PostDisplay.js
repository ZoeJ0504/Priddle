import React, { useEffect, useState } from "react";

function PostDisplays({ text, id, user }) {
    const [maybe, setMaybe] = useState([])
    const [updatePost, setUpdatePost] = useState(false)
    const [updatedText, setUpdatedText] = useState("")


    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => res.json())
            .then(data => setMaybe(data.username))
    }, [id])

    const handleClick = () => {
        setUpdatePost(!updatePost)
    }

    const handleChange = (event) => {
        setUpdatedText(event.target.value)
    }

    return (
        <div>
            <p>{text}</p>
            <p>-{maybe}</p>
            {user.username === maybe ? <button onClick={handleClick}>Update</button> : <p>Enjoy the Post!</p>}
            {user.username === maybe ? <button>Delete</button> : ""}
            {updatePost === true ? <form>
                <input type="text" onChange={handleChange} />
                <button>Update!</button>
            </form> : ""}
        </div>
    )
}

export default PostDisplays