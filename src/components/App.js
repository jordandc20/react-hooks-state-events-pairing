import video from "../data/video.js";
import LikesContainer from "./LikesContainer.js";
import VideoContainer from "./VideoContainer.js";
import { useState } from "react"
import CommentsContainer from "./CommentsContainer.js";

function App() {
  // console.log("Here's your data:", video);

  const [upvotes,setUpvotes]=useState(video.upvotes)
  const [downvotes,setDownvotes]=useState(video.downvotes)


  return (
    <div className="App">
      <VideoContainer
        title={video.title}
        embedUrl={video.embedUrl}
        views={video.views}
        createdAt={video.createdAt}
      />
      <LikesContainer
        upvotes={upvotes}
        setUpvotes={setUpvotes}
        downvotes={downvotes} 
        setDownvotes={setDownvotes}
        />
    <CommentsContainer comments={video.comments}/>

    </div>
  );
}

export default App;
