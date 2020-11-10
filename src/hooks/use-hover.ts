import { useEffect, useRef, useState } from "react"

export function useHover<T extends HTMLElement = HTMLDivElement>(
  option
): [React.MutableRefObject<null>, boolean] {
  const { thresholdTime } = option
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  let lock = false
  const threshold = thresholdTime || 0
  const handleMouseOver = () => {
    clearTimeout() // stop mouseout codes
    lock = true
    setValue(true)
  }
  const handleMouseOut = () => {
    lock = false
    setTimeout(function () {
      if (lock === false) setValue(false) //undo stuff
    }, threshold)
  }

  useEffect(() => {
    const node: T | Window = ref?.current || window

    if (node) {
      node.addEventListener("mouseover", handleMouseOver)
      node.addEventListener("mouseout", handleMouseOut)

      return () => {
        node.removeEventListener("mouseover", handleMouseOver)
        node.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [ref.current]) // Recall only if ref changes

  return [ref, value]
}
