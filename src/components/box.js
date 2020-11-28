import React, { useState } from "react"
import parse from 'html-react-parser';
import ReactModal from "react-modal"
import "./calendar"

const Box = ({ boxNumber, content }) => {
  const [open, setOpen] = useState(false)
  const [locked, setLocked] = useState(true)

  let styleRule

  switch (boxNumber) {
    case "10":
      styleRule = "double-row"
      break
    case "28":
      styleRule = "double-column"
      break
    default:
      styleRule = "box--standard"
      break
  }

  return (
    <div className={styleRule}>
      {locked && (
        <div
          className="box--locked"
          style={{}}
          onClick={() => !content.isBlocked && setLocked(false)}
        >
          {" "}
          {content.day}
        </div>
      )}
      {!locked && (
        <div
          className="box--unlocked"
          style={{}}
          onClick={() => setOpen(!open)}
        >
          {content.contentPreview}
        </div>
      )}

      <ReactModal
        closeTimeoutMS={500}
        isOpen={!locked && open}
        contentLabel="modal"
        onRequestClose={() => setOpen(!open)}
      >
        {content.contentFull}
      </ReactModal>
    </div>
  )
}

export default Box
