import React, { useEffect, useState } from "react";

function PostDisplays({ text, user }) {
    const [userData, setUserData] = useState([])


    useEffect(() => {
        fetch(`/users/${user}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div>
            <p>{text}</p>
            <p>{userData.username}</p>
        </div>
    )
}

export default PostDisplays