import React from "react"

import me from "../images/me.png"

import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="main">
      <div className="container">
        <img className="container__image" src={me} />
        <div className="container__text">
          <h2>About Me</h2>
          <p>
            I am Carlos Santiago, currently located in Vancouver, BC. Throughout
            my childhood, I played video games for long hours almost everyday,
            the SNES and N64 were the peak console gaming for me. When I was in
            my teens my 2 biggest passions were playing guitar and playing
            online games like starcraft, AoE and then Counter-Strike. My love
            for music led me to teach myself guitar, keyboard, sound design and
            sound engineer.
          </p>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <p>
            After finishing secondary school, I was good enough to land jobs in
            recording studios. After doing freelance jobs in the audio field, I
            got a job at Ace Team Software, it was a dream job I worked on my
            biggest passion, audio, music and games and I learned a lot there:
            communication, openness and being able to discuss ideas are some of
            the skills that I gained working there.{" "}
            <div>&nbsp;&nbsp;&nbsp;</div> At the beginning of my 30s, I started
            to feel a bit stagnant in my career, having to work with Unreal
            Engine I got curious about the coding side and I enrolled in Langara
            College in Vancouver, BC. After one and a half year I graduate from
            Internet and Web Technology, it deepen my knowledge and my will to
            keep learning games engines and audio programming.
          </p>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <h2>Skills and Experience</h2>
          <p>
            I am Carlos Santiago, currently located in Vancouver, BC. Throughout
            my childhood, I played video games for long hours almost everyday,
            the SNES and N64 were the peak console gaming for me. When I was in
            my teens my 2 biggest passions were playing guitar and playing
            online games like starcraft, AoE and then Counter-Strike. My love
            for music led me to teach myself guitar, keyboard, sound design and
            sound engineer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
