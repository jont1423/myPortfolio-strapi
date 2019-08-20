import TextLoop from "react-text-loop";
import React from "react"

function homeTextLoop() {
  return (
    <h2>
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                    <div>
        				<span>First item</span>
        				<span>Second item</span>
    				</div>
    				<div>Third item</div>
                </TextLoop>{" "}
                and something else.
            </h2>
  )
}
export default homeTextLoop


