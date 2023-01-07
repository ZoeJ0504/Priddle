import React from "react";


function RiddlePostForm({ user, updatedText, handleHandler, handleChange }) {






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