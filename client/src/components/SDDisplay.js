import React, { useEffect, useState } from "react";

function SDDisplay({ text, user }) {
    const [userData, setUserData] = useState([])


    useEffect(() => {
        fetch(`/users/${user}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])


    return (
        <div>
            <img src={text} alt={text} />
            <p>{userData.username}</p>
        </div>
    )
}
export default SDDisplay