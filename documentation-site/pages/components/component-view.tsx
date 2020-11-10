import * as React from "react"
import { useEffect, useState } from "react"
import { Compiler, Error, useView } from "react-view"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { CodeEditor } from "../../components/code-editor"
import { sizeBg } from "../../utils"
import { CompilerWrap } from "./styled-components"

export function ComponentView({ code, id }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // refresh ReactView when new code prop arrived
    setCount(count + 1)
  }, [code])
  return <ReactView key={count} code={code} />
}

function ReactView({ code }) {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const params = useView({
    initialCode: code,
    scope: { System, useTheme, useState },
    onUpdate: console.log,
  })
  return (
    <>
      <System.Spacing height="scale900" backgroundColor={sizeBg} />
      <CompilerWrap {...sharedProps}>
        <Compiler {...params.compilerProps} />
      </CompilerWrap>
      <System.Spacing height="scale900" backgroundColor={sizeBg} />
      <CodeEditor {...params.editorProps} />
      <Error {...params.errorProps} />
    </>
  )
}
