import React, { useState } from "react";


function RiddlePostForm({ user, updatedText, handleHandler, handleChange }) {

    console.log(user)





    return (
        <div>
            <form onSubmit={handleHandler}>
                <input type="text" onChange={handleChange} value={updatedText} />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default RiddlePostForm