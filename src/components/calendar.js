import React from "react"
import "./calendar.css"
import Box from "./box"

const Calendar = ({BOXES}) => {
    return(
        <div className="calendar__boxes">
        {Object.entries(BOXES).map((box, index) => (
          <Box key={index} boxNumber={box[0]} 
          content={box[1]} />
        ))}
        </div>
    );
}

export default Calendar



// this.props.BOXES