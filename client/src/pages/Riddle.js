import React, { useEffect, useState } from 'react'
import PostDisplays from '../components/PostDisplay'
import RiddlePostForm from '../components/RiddlePostForm'

function Riddle({ user }) {
    const [posts, setPost] = useState([])
    const [newPost, setNewPost] = useState({})
    const [riddle, setRiddle] = useState("")



    useEffect(() => {
        fetch("/riddles")
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])


    console.log(user)

    const handleHandler = (e) => {
        e.preventDefault()
        setNewPost({
            user_id: user.id,
            post: riddle
        })
        handleSubmit()
    }

    console.log(riddle)

    const handleSubmit = () => {
        fetch("/rposts", {
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
        setRiddle(e.target.value)
    }

    return (
        <div>
            <RiddlePostForm handleHandler={handleHandler} handleChange={handleChange} riddle={riddle} />
            {posts?.map(post => { return <PostDisplays key={post.id} text={post.text} id={post.user_id} user={user} postId={post.id} /> })}
        </div>
    )
}

export default Riddle