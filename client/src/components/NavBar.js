import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function NavBar({ logout }) {
    const navigate = useNavigate()


    function handleClick(e) {
        fetch("/logout", {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                logout(null);
            }
        });
        navigate("/")
    }

    const handleRiddleClick = () => {
        navigate("/riddles")
    }

    const handleHomeClick = () => {
        navigate("/home")
    }

    const handleSDClick = () => {
        navigate("/spot_the_difference")
    }

    const handle3DPuzzle = () => {
        navigate("/3d_puzzle")
    }

    return (
        <div>
            <div onClick={handleHomeClick}>Home</div>
            <div onClick={handleRiddleClick}>Riddles</div>
            <div onClick={handleSDClick}>Spot The Difference</div>
            <div onClick={handle3DPuzzle}>3D Puzzle</div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default NavBar


