import { number } from "prop-types"
import React, {useState} from "react"


const Box = ({boxNumber, content}) =>  {

    const [open, setOpen] = useState(false)
    const [locked, setLocked] = useState(true)


    return (
        <div>
        {
            locked && <div style={{}} onClick={() =>
                setLocked(false)}> {boxNumber} </div>
        }
        {
            !locked && <div style={{}} onClick={() => setOpen(!open)}>preview</div>
        }
        {
            !locked && open && <div style={{}}>full msg</div>
        }
            
        </div>
          
    )
}

export default Box