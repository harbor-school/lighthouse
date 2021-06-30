import { Data, Override } from "framer"

const appState = Data({
  toastShow: false,
})

export function ProgressBar(): Override {
  return {
    overrides: {
      Bar: {
        background: "red",
      },
      Wrap: {
        background: "green",
      },
    },
  }
}

export function Toast(): Override {
  return {
    show: appState.toastShow,
    onButtonClick: () => (appState.toastShow = false),
  }
}

export function ToastButton(): Override {
  return {
    onClick: () => (appState.toastShow = !appState.toastShow),
    content: appState.toastShow ? "Hide" : "Show",
    kind: appState.toastShow ? "secondary" : "primary",
  }
}
