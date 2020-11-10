import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import * as System from "../lighthouse"
import { handleNewline } from "../utils/handle-newline"
import {
  HeaderLine,
  ModalBody,
  ModalBoxInner,
  ModalFooter,
  ModalHeader,
  ModalWrap,
  Description,
  Title,
} from "./styled-components"
import { ModalContentPropsT } from "./types"

export const ModalContent: React.FC<ModalContentPropsT> = ({
  title,
  desc,
  children,
  confirmText,
  cancelText,
  closeOnClick,
  confirmOnClick,
  $errors,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $errors }

  return (
    <ModalBoxInner>
      <ModalWrap>
        <ModalHeader $style={overrides.ModalHeader} {...sharedProps}>
          <Title $style={overrides.Title} {...sharedProps}>
            {handleNewline(title)}
          </Title>
          <HeaderLine {...sharedProps} />
        </ModalHeader>
        <ModalBody $style={overrides.ModalBody}>
          {desc && (
            <Description $style={overrides.Description} {...sharedProps}>
              {handleNewline(desc)}
            </Description>
          )}
          {children}
        </ModalBody>
        <ModalFooter $style={overrides.ModalFooter} {...sharedProps}>
          <System.Button kind="secondary" type="button" onClick={closeOnClick}>
            {cancelText}
          </System.Button>
          <System.Button kind="primary" type="submit" onClick={confirmOnClick}>
            {confirmText}
          </System.Button>
        </ModalFooter>
      </ModalWrap>
    </ModalBoxInner>
  )
}

ModalContent.defaultProps = {}
