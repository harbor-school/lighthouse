import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"
import { getPaddingPros, getMarginPros } from "./utils/styles"

const InnerDisplaySmall = (props) => {
  return (
    <System.DisplaySmall
      {...props}
      style={{
        textAlign: props.textAlign,
      }}
      {...getPaddingPros(props)}
      {...getMarginPros(props)}
    >
      {props.content}
    </System.DisplaySmall>
  )
}

export const DisplaySmall = withHOC(InnerDisplaySmall)

DisplaySmall.defaultProps = {
  width: 304,
  height: 56,
}

addPropertyControls(DisplaySmall, {
  content: {
    title: "Children",
    type: ControlType.String,
    displayTextArea: true,
    defaultValue: "DisplaySmall",
  },
  color: {
    title: "Color",
    type: ControlType.String,
    defaultValue: "contentPrimary",
  },
  textAlign: {
    title: "Text Align",
    type: ControlType.SegmentedEnum,
    optionTitles: ["Left", "Center", "Right"],
    options: ["left", "center", "right"],
  },
  padding: {
    title: "Padding",
    type: ControlType.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  margin: {
    title: "Margin",
    type: ControlType.FusedNumber,
    toggleKey: "marginPerSide",
    toggleTitles: ["Margin", "Margin per side"],
    valueKeys: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  as: {
    title: "As",
    type: ControlType.Enum,
    defaultValue: "div",
    options: [
      "symbol",
      "object",
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "slot",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "template",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "webview",
      "svg",
      "animate",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "switch",
      "text",
      "textPath",
      "tspan",
      "use",
      "view",
    ],
  },
})
