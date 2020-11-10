import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { setTheme } from "./ThemeManagement"
import { useState, useEffect } from "react"
import * as System from "../../../../lighthouse"
import { withHOC } from "./withHOC"

const InnerThemeSwitcher = (props) => {
  const [themeData, setThemeData] = useState()
  useEffect(() => {
    setTheme({
      key: props.theme,
      themeData,
    })
  }, [props.theme, themeData])
  useEffect(() => {
    const loadFileData = () => {
      fetch(decodeURIComponent(props.themeFile.replace("/preview", "")), {
        method: "GET",
        credentials: "omit",
        redirect: "follow",
      })
        .then((resp) => {
          if (!resp.ok) {
            console.error("There was an error while the fetching FILE JSON URL")
            console.log("Printing failed response...")
            console.log(resp)
            return
          }
          resp
            .json()
            .then((data) => {
              setThemeData(data)
            })
            .catch((e) => {
              console.error(e)
              console.log("Could not parse a valid JSON from the FILE URL")
            })
        })
        .catch((e) => {
          console.error(e)
        })
    }
    props.themeFile && loadFileData()
  }, [props.themeFile])

  return (
    <>
      <System.Radio label="Light Theme" checked={props.theme === "light"} />
      <System.Spacing height="scale600" />
      <System.Radio label="Dark Theme" checked={props.theme === "dark"} />
      <System.Spacing height="scale600" />
      <System.Radio
        label={`Custom Theme (${props.themeFile})`}
        checked={props.theme === "custom"}
      />
    </>
  )
}

export const ThemeSwitcher = withHOC(InnerThemeSwitcher)

ThemeSwitcher.defaultProps = {
  width: 350,
  height: 92,
}

addPropertyControls(ThemeSwitcher, {
  theme: {
    title: "Theme",
    options: ["light", "dark", "custom"],
    optionTitles: ["Light", "Dark", "Custom"],
    type: ControlType.Enum,
    defaultValue: "light",
  },
  themeFile: {
    type: ControlType.File,
    allowedFileTypes: ["json"],
    hidden(props) {
      return props.theme !== "custom"
    },
  },
})
