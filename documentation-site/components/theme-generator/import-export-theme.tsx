import * as React from "react"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { themeEditorState } from "../../store"
import { useRecoilState } from "recoil"
import { useClipboard } from "../../hooks"
import { CodeEditor } from "../code-editor"

export function ImportExportTheme() {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const [themeEditor, setThemeEditor] = useRecoilState(themeEditorState)
  const themeString = JSON.stringify(themeEditor, null, 2)
  const { hasCopied, onCopy } = useClipboard(themeString)

  return (
    <System.Block position="relative" font="ParagraphLarge">
      {/* import & export theme (json) and save it to store */}
      <CodeEditor
        code={themeString}
        onChange={(json) => setThemeEditor(JSON.parse(json))}
        placeholder="placeholder"
      />

      <System.Button
        kind="secondary"
        onClick={onCopy}
        overrides={{
          BaseButton: {
            position: "absolute",
            top: "0px",
            right: "0px",
            ...getCopiedStyle({ theme, hasCopied }),
          },
        }}
      >
        {hasCopied ? "Copied!" : "Copy Theme Data (my-theme.json)"}
      </System.Button>
    </System.Block>
  )
}

function getCopiedStyle({ theme, hasCopied }) {
  if (hasCopied) {
    return {
      color: theme.colors.primary,
      WebkitTextFillColor: theme.colors.primary,
    }
  }
}
