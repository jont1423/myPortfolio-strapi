import TextLoop from "react-text-loop"
import React from "react"

import "./homeTextLoop.css"

function homeTextLoop() {
  return (
    <h2>
      <div>Hi, I'm Jon!</div>
      <TextLoop
        springConfig={{ stiffness: 180, damping: 8 }}
        adjustingSpeed={500}
      >
        <div>Full-stack Web Developer</div>
        <div>UI/UX Designer</div>
        <div>ReactJs</div>
      </TextLoop>
    </h2>
  )
}
export default homeTextLoop
