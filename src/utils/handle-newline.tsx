import * as React from "react"

export const handleNewline = (text) => {
  if (typeof text === "string")
    return text.split("\n").map((item, key) => (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    ))
  else return text
}
