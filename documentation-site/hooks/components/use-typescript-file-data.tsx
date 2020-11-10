import { useState, useEffect } from "react"
import { getTypescriptFileData } from "../../lib/typescript-files"

export const useTypescriptFileData = (name) => {
  const [docComment, setDocComment] = useState(null)

  useEffect(() => {
    async function update() {
      const parserContext = getTypescriptFileData(name)
      setDocComment(parserContext.docComment)
    }
    name && update()
  }, [name])

  return docComment
}
