import { Client as Styletron } from "styletron-engine-atomic"

declare global {
  interface Window {
    styletronEngine: Styletron
  }
}

if (!window.styletronEngine) {
  window.styletronEngine = new Styletron()
}

export const engine = window.styletronEngine
