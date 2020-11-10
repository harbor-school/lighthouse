import * as React from "react"
import SimpleEditor from "react-simple-code-editor"
import Highlight, { Prism, defaultProps } from "prism-react-renderer"
import prismThemeLight from "prism-react-renderer/themes/nightOwlLight"
import prismThemeDark from "prism-react-renderer/themes/nightOwl"
import { useTheme } from "../../../lighthouse"
import { useValueDebounce, TEditorProps } from "react-view"
import { TokenLine } from "./markdown-elements"
import { isDarkMode } from "../utils"

export const CodeEditor: React.FC<TEditorProps> = ({ code: globalCode, onChange, placeholder }) => {
  const theme = useTheme()
  const [focused, setFocused] = React.useState(false)

  const [code, setCode] = useValueDebounce<string>(globalCode, onChange)
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `.npm__react-simple-code-editor__textarea { outline: none !important }`,
        }}
      />
      <SimpleEditor
        ignoreTabKey={true}
        value={code || ""}
        placeholder={placeholder}
        highlight={(code) => highlightCode(code, theme)}
        onValueChange={(code) => setCode(code)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        padding={theme.sizing.scale500}
        style={{
          background: focused
            ? theme.colors.backgroundPrimaryAccent
            : theme.colors.backgroundPrimary,
          fontSize: "0.85em",
          fontFamily: '"Roboto Mono", monospace',
        }}
      />
    </div>
  )
}

const highlightCode = (code: string, theme) => (
  <Highlight
    {...defaultProps}
    theme={isDarkMode() ? prismThemeDark : prismThemeLight}
    code={code}
    language="jsx"
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => {
              const tokenProps = getTokenProps({ token, key })
              return <TokenLine key={key} $as="span" {...tokenProps} />
            })}
          </div>
        ))}
      </>
    )}
  </Highlight>
)
