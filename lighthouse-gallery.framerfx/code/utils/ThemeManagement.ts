import { ThemeStateT } from "./types"

let globalTheme: ThemeStateT = {
  key: "light",
  themeData: null,
}

type Listener = (theme: ThemeStateT) => void
const listeners = new Set<Listener>()

function notifyListeners() {
  for (const listener of listeners) {
    listener(globalTheme)
  }
}

export function setTheme(theme: ThemeStateT) {
  globalTheme = theme
  notifyListeners()
}

export function getCurrentTheme(): ThemeStateT {
  return globalTheme
}

// Called as part of a React.useEffect
export function addListener(onThemeChange: Listener) {
  listeners.add(onThemeChange)

  if (!!globalTheme) {
    notifyListeners()
  }

  // Clean up the listener
  return () => {
    listeners.delete(onThemeChange)
  }
}
