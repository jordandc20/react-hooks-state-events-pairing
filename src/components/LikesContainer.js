// import React from "react"

import { useState } from "react"

function LikesContainer({ upvotes, downvotes , setDownvotes, setUpvotes}) {
    const handleButtonClick = (e) => {
        e.target.name === "+"  ? setUpvotes(++upvotes) : setDownvotes(++downvotes)
 }


    return (
        <div>
            <button name="+" onClick={handleButtonClick}>{upvotes}👍</button>
            <button name="-" onClick={handleButtonClick}>{downvotes}👎</button>
        </div>
    )

}
export default LikesContainer