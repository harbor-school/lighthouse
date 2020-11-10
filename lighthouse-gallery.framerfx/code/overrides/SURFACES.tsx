import * as React from "react"
import { Override, Data } from "framer"
import * as System from "../../../../lighthouse"
import { sleep } from "./utils"

const appState = Data({
  isOpen: false,
  modalFormLoading: false,
  modalFormValue: null,
})

export function Drawer(): Override {
  return {
    isOpen: appState.isOpen,
  }
}

export function Button(): Override {
  return {
    onClick: () => (appState.isOpen = !appState.isOpen),
    width: "", // remove control Frame width to center align the Button
    content: appState.isOpen ? "Close" : "Open",
    kind: appState.isOpen ? "secondary" : "primary",
  }
}

// Sign Up Modals
export function Modal_DefaultLoading(): Override {
  const { modalFormValue } = appState
  const content = modalFormValue && {
    content: <System.ParagraphMedium>Hello, {modalFormValue.name}!</System.ParagraphMedium>,
  }
  return {
    loading: appState.modalFormLoading,
    onSubmit: handlerSubmit,
    ...content,
  }
}

export function Modal_WithAlert(): Override {
  const { modalFormValue } = appState
  const content = modalFormValue && {
    content: <System.ParagraphMedium>Hello, {modalFormValue.name}!</System.ParagraphMedium>,
  }
  return {
    isOpen: !appState.modalFormValue,
    loading: appState.modalFormLoading,
    onSubmit: handlerSubmit,
    ...content,
  }
}

export function Modal_PartialLoading(): Override {
  return {
    onSubmit: handlerSubmit,
    ...getModalContent(appState),
  }
}

export function Alert(): Override {
  const { modalFormLoading, modalFormValue } = appState
  const show = !modalFormLoading && modalFormValue
  const title = show && `Welcome ${modalFormValue.name}!`
  return {
    show,
    title,
  }
}

function getModalContent({ modalFormLoading, modalFormValue }) {
  if (modalFormLoading && !modalFormValue) {
    return {
      content: (
        <System.Block display="flex" justifyContent="center">
          <System.Spinner />
        </System.Block>
      ),
    }
  } else if (modalFormValue) {
    return {
      content: <System.ParagraphMedium>Hello, {modalFormValue.name}!</System.ParagraphMedium>,
    }
  }
}

async function handlerSubmit(values) {
  appState.modalFormLoading = true
  await sleep(2)
  appState.modalFormValue = values
  console.log("values", values)
  appState.modalFormLoading = false
}
