import Comment from "./Comment.js";
import { useState } from "react"


function CommentsContainer({ comments }) {
    const [showComments, setShowComments] = useState(true)

    const commentsList = comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
        // comment={comment}
    ))

    function handleCommentsClick(e) {
        setShowComments(!showComments)
    }

    return (
        <div>
            <br />

            <button onClick={handleCommentsClick}>{showComments ? 'Hide' : 'Show'} Comments</button>
            <hr />

            {showComments ? (
                <div>
                    <h2>{commentsList.length} Comments</h2>
                    {commentsList}
                </div>
            ) : (null)}
        </div>
    )
}
export default CommentsContainer