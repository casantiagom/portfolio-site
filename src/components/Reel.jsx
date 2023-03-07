import React from "react"
import "./reel.css"

const Reel = () => {
  return (
    <div className="reel">
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/dNyM5wnW4Jc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </div>
  )
}

export default Reel
