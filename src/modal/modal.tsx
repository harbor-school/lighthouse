import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useContext, useRef } from "react"
import { useForm } from "react-hook-form"
import { FormContext } from "../helpers/form-provider"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useOnClickOutside } from "../hooks"
import { Spinner } from "../spinner"
import { ROLE } from "./constants"
import { ModalContent } from "./modal-content"
import { ChildrenWrap, Loading, InnerWarp, Wrap } from "./styled-components"
import { ModalPropsT } from "./types"

export const Modal: React.FC<ModalPropsT> = ({
  role,
  children,
  title,
  desc,
  confirmText,
  cancelText,
  closeOnClick = () => void 0,
  confirmOnClick = () => void 0,
  onSubmit = (values) => console.log("values from default onSubmit", values),
  loading,
  loadingSpinner,
  isOpen,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const ref = useRef(null)
  const formProps = useForm({
    mode: "onBlur",
  })
  const sharedProps = { $theme: theme, $errors: formProps.errors }
  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const modal = {
    hidden: { opacity: 0, top: "53%", transition: defaultTransition },
    visible: {
      opacity: 1,
      top: "50%",
      transition: { ...defaultTransition, delay: theme.animation.timing200 },
    },
  }
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: modal,
  }
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, closeOnClick)

  return (
    // @ts-ignore
    <AnimatePresence>
      {isOpen && (
        <FormContext.Provider value={formProps}>
          <Wrap
            ref={ref}
            $as={role === ROLE.form ? motion.form : motion.div}
            onSubmit={formProps.handleSubmit(onSubmit)}
            $style={overrides.Wrap}
            {...sharedProps}
            {...motionProps}
          >
            <InnerWarp {...sharedProps}>
              {loading ? (
                <Loading $style={overrides.Loading}>{loadingSpinner}</Loading>
              ) : (
                <ModalContent
                  role={role}
                  closeOnClick={closeOnClick}
                  desc={desc}
                  onSubmit={onSubmit}
                  title={title}
                  confirmText={confirmText}
                  cancelText={cancelText}
                  confirmOnClick={confirmOnClick}
                  overrides={overrides}
                  {...sharedProps}
                >
                  {children && <ChildrenWrap {...sharedProps}>{children}</ChildrenWrap>}
                </ModalContent>
              )}
            </InnerWarp>
          </Wrap>
        </FormContext.Provider>
      )}
    </AnimatePresence>
  )
}

export default Modal

Modal.defaultProps = {
  title: "title",
  role: "dialog",
  desc: "Modal Description",
  onSubmit: (values) => console.log("values from default onSubmit", values),
  loading: false,
  loadingSpinner: <Spinner />,
  isOpen: false,
}
