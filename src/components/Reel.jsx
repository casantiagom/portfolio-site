import React from "react"
import "./reel.css"

const Reel = () => {
  return (
    <div className="video">
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/xcA0nEPsNGQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Reel
