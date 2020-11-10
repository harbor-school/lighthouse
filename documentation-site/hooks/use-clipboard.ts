import { useState, useCallback, useEffect } from "react"
import copy from "copy-to-clipboard"

export function useClipboard(text: string, timeout = 1500) {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    const didCopy = copy(text)
    setHasCopied(didCopy)
  }, [text])

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false)
      }, timeout)

      return () => clearTimeout(id)
    }
  }, [timeout, hasCopied])

  return { value: text, onCopy, hasCopied }
}
