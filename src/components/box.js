import { number } from "prop-types"
import React, {useState} from "react"


const Box = ({boxNumber, content}) =>  {

    const [open, setOpen] = useState(false)
    const [locked, setLocked] = useState(true)

    let styleRule

    switch(boxNumber) {
        case '10':
            styleRule = "double-row"
            break
        default:
            styleRule = ""
            break
    }


    return (
        <div className={styleRule}>
        {
            locked && <div className="box--locked" style={{}} onClick={() =>
                setLocked(false)}> {content.day} - box {boxNumber} </div>
        }
        {
            !locked && <div className="box--unlocked" style={{}} onClick={() => setOpen(!open)}>{content.contentPreview}</div>
        }
        {
            !locked && open && <div className="box--open-full" style={{}}>{content.contentFull}</div>
        }
            
        </div>
          
    )
}

export default Box