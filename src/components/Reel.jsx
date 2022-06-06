import React from "react"
import "./reel.css"

const Reel = () => {
  return (
    <div className="reel">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L4U_rbY8sVM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Reel
