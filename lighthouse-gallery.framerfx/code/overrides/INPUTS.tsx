import { Override, Data } from "framer"
import * as System from "../../../../lighthouse"

const appState = Data({
  inputValue: "",
  radioValue: "ios",
})

export function Text(props): Override {
  return {
    content: appState.inputValue,
  }
}

export function Input(props): Override {
  const overrides: Override & System.InputPropsT = {
    onChange: (e) => (appState.inputValue = e.target.value),
  }
  return overrides
}

export function Radio0(props): Override {
  const overrides: Override & System.RadioPropsT = {
    checked: appState.radioValue === "ios",
    onChange: (e) => (appState.radioValue = e.target.value),
  }
  return overrides
}

export function Radio1(props): Override {
  const overrides: Override & System.RadioPropsT = {
    checked: appState.radioValue === "android",
    onChange: (e) => (appState.radioValue = e.target.value),
  }
  return overrides
}
