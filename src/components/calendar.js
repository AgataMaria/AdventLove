import React from "react"
import "./calendar.css"
import Box from "./box"
import Particles from "react-particles-js"
import PARTICLES_CONFIG from "./particles-config"


const BOXES = {
  1: ["", ""],
  2: ["preview!", "full message"],
  3: ["", ""],
  4: ["", ""],
  5: ["", "just a string"],
  6: ["", ""],
  7: ["", ""],
  8: ["", ""],
  9: ["", ""],
  10: ["", ""],
  11: ["", ""],
  12: ["", ""],
  13: ["", ""],
  14: ["", ""],
  15: ["", ""],
  16: ["", ""],
  17: ["", ""],
  18: ["", ""],
  19: ["", ""],
  20: ["", ""],
  21: ["", ""],
  22: ["", ""],
  23: ["", ""],
  24: ["", ""],
  25: ["", ""],
  26: ["", ""],
  27: ["", ""],
  28: ["", ""],
  29: ["", ""],
  30: ["", ""],
}

const Calendar = () => {
  return (
    <>
    <Particles params={PARTICLES_CONFIG}/>
      <div className="calendar">    
        <header className="header">
          <h1>Merry Christmas</h1>{" "}
        </header>
        <div className="calendar-boxes">
          {Object.entries(BOXES).map(box => (
            <Box key={box[0]} boxNumber={box[0]} 
            contentPreview={box[0]} contentFull={box[0]} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Calendar
