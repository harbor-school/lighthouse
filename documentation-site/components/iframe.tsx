import * as React from "react"
import * as System from "../../../lighthouse"
import { useState } from "react"
import { styled } from "styletron-react"

const LoadingWrap = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
})

export function Iframe({ src }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <LoadingWrap>{!loaded && <System.Spinner />}</LoadingWrap>
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "500px",
          border: "none",
        }}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

Iframe.defaultProps = {}
