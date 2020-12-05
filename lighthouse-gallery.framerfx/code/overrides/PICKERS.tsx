import * as React from "react"
import { useState } from "react"
import { Override } from "framer"
import * as System from "../../../../lighthouse"
import { getCurrentTheme, getThemeByKey } from "../utils"

export function Select(): Override {
  const theme = getThemeByKey(getCurrentTheme())
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(0)

  return {
    placeholder: "Yap!",
    isOpen,
    active,
    onClick: () => setIsOpen(true),
    onClickOutside: () => setIsOpen(false),
    options: [
      { label: "label", endEnhancer: <div>🤢</div> },
      {
        label: "label2",
        endEnhancer: (
          <System.Icons.Lock width={theme.sizing.scale600} color={theme.colors.contentSecondary} />
        ),
      },
      {
        label: "label3",
        endEnhancer: (
          <System.Icons.Lock width={theme.sizing.scale600} color={theme.colors.primary} />
        ),
      },
      {
        label: "label4",
        endEnhancer: <System.Icons.Menu width={theme.sizing.scale600} color="red" />,
      },
      {
        label: "Disabled Label",
        disabled: true,
        endEnhancer: (
          <System.Icons.Lock width={theme.sizing.scale600} color={theme.colors.contentTertiary} />
        ),
      },
    ],
    onChange: (value: any) => setActive(value),
  }
}
