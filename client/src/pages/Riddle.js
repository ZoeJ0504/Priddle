import React, { useEffect, useState } from 'react'
import PostDisplays from '../components/PostDisplay'
import RiddlePostForm from '../components/RiddlePostForm'

function Riddle({ user }) {
    const [posts, setPost] = useState([])
    const [newPost, setNewPost] = useState({})
    const [updatedText, setUpdatedText] = useState("")



    useEffect(() => {
        fetch("/riddles")
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])



    const handleHandler = (e) => {
        e.preventDefault()
        setNewPost({
            group_id: 1,
            user_id: user.id,
            post: updatedText
        })
        handleSubmit()
    }

    const handleSubmit = () => {
        fetch("/riddles/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())
        setPost([newPost, ...posts])
    }


    const handleChange = (e) => {
        setUpdatedText(e.target.value)
    }

    return (
        <div>
            <RiddlePostForm user={user} handleHandler={handleHandler} handleChange={handleChange} />
            {posts.map(post => { return <PostDisplays key={post.id} text={post.text} id={post.user_id} user={user} postId={post.id} /> })}
        </div>
    )
}

export default Riddle