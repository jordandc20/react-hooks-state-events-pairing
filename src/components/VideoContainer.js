// import React from 'react'

function VideoContainer({title, embedUrl, views, createdAt}){

    return (
        <div>
              <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <p>{views} Views | uploaded {createdAt}</p>
      </div>)
}

export default VideoContainer