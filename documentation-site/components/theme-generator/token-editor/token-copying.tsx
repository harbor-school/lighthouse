import * as React from "react"
import { useRecoilValue } from "recoil"
import * as System from "../../../../../lighthouse"
import { useClipboard } from "../../../hooks"
import { themeEditorState } from "../../../store"
import { getColorfromString, isHex } from "../../../utils"

export function TokenCopying({ tokenValue }) {
  const themeEditor = useRecoilValue(themeEditorState)
  const tokenString = isHex(tokenValue) ? tokenValue : getColorfromString(tokenValue, themeEditor)

  const { hasCopied, onCopy } = useClipboard(tokenString)

  return (
    <System.Block onClick={onCopy} cursor="pointer">
      {hasCopied ? "copied" : "copy"}
    </System.Block>
  )
}

TokenCopying.defaultProps = {}
