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
          <h2>Skills and Goals</h2>
          <p>
            During my teens I was playing a lot of guitar and had the necessity
            to record what I was playing, that led me to learn Cubase and later
            on Ableton Live and Protools to record and mix the music that I was
            doing with the bands I was back then. After that I got a job at Ace
            Team for mixing and mastering the original soundtrack of Zeno Clash
            II. The composer and directors were impressed with my job and I kept
            working on the next games OST. Then I got an offer to work with them
            but now as a sound designer, my commitment, curiosity, ability to
            learn fast and good communication were key for landing on that job.
            <div>&nbsp;&nbsp;&nbsp;</div>I started my journey as a sound
            engineer. Even though I like mixing and mastering, game sound design
            is where my soul is at now. I enjoy every stage of it from
            conceptualization, brainstorming, discussion to the micro detail and
            implementation.
            <div>&nbsp;&nbsp;&nbsp;</div>After studying programming at Langara I
            got a better insight on how computers work on the back. Now I feel
            confident to deepen my knowledge in games engines and audio
            middleware.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
