import React from "react"
import "./calendar.css"
import Box from "./box"
import Particles from "react-particles-js"
import PARTICLES_CONFIG from "./particles-config"


const BOXES = {
  1: { day: "13", contentPreview: "preview", contentFull: "full msg", isBlocked: false },
  2: { day: "20", contentPreview: "", contentFull: "", isBlocked: false },
  3: { day: "12", contentPreview: "", contentFull: "", isBlocked: false },
  4: { day: "6", contentPreview: "", contentFull: "", isBlocked: false },
  5: { day: "⛄", contentPreview: "", contentFull: "", isBlocked: true },
  6: { day: "22", contentPreview: "", contentFull: "", isBlocked: false },
  7: { day: "1", contentPreview: "", contentFull: "", isBlocked: false },
  8: { day: "7", contentPreview: "", contentFull: "", isBlocked: false },
  9: { day: "14", contentPreview: "", contentFull: "", isBlocked: false },
  10: { day: "24", contentPreview: "", contentFull: "", isBlocked: false },
  11: { day: "2", contentPreview: "", contentFull: "", isBlocked: false },
  12: { day: "16", contentPreview: "", contentFull: "", isBlocked: false },
  13: { day: "24", contentPreview: "", contentFull: "", isBlocked: false },
  14: { day: "14", contentPreview: "", contentFull: "", isBlocked: false },
  15: { day: "10", contentPreview: "", contentFull: "", isBlocked: false },
  16: { day: "11", contentPreview: "", contentFull: "", isBlocked: false },
  17: { day: "3", contentPreview: "", contentFull: "", isBlocked: false },
  18: { day: "8", contentPreview: "", contentFull: "", isBlocked: false },
  19: { day: "🤍", contentPreview: "", contentFull: "", isBlocked: true },
  20: { day: "5", contentPreview: "", contentFull: "", isBlocked: false },
  21: { day: "18", contentPreview: "", contentFull: "", isBlocked: false },
  22: { day: "21", contentPreview: "", contentFull: "", isBlocked: false },
  23: { day: "23", contentPreview: "", contentFull: "", isBlocked: false },
  24: { day: "9", contentPreview: "", contentFull: "", isBlocked: false },
  25: { day: "17", contentPreview: "", contentFull: "", isBlocked: false },
  26: { day: "4", contentPreview: "", contentFull: "", isBlocked: false },
  27: { day: "🎁", contentPreview: "", contentFull: "", isBlocked: true },
  28: { day: "25", contentPreview: "", contentFull: "", isBlocked: false },
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
          {Object.entries(BOXES).map((box, index) => (
            <Box key={box[0]} boxNumber={box[0]} 
            content={box[1]} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Calendar
