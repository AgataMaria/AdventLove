import { number } from "prop-types"
import React, {useState} from "react"


const Box = ({boxNumber, contentPreview, contentFull}) =>  {

    const [open, setOpen] = useState(false)
    const [locked, setLocked] = useState(true)


    return (
        <div>
        {
            locked && <div className="box--locked" style={{}} onClick={() =>
                setLocked(false)}> {boxNumber} </div>
        }
        {
            !locked && <div className="box--unlocked" style={{}} onClick={() => setOpen(!open)}>{contentPreview}</div>
        }
        {
            !locked && open && <div className="box--open-full" style={{}}>{contentFull}</div>
        }
            
        </div>
          
    )
}

export default Box