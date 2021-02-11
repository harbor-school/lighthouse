import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerButton = (props) => {
  return <System.Button {...props}>{props.content}</System.Button>
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
  width: 140,
  height: 40,
  ...System.Button.defaultProps,
}

addPropertyControls(Button, {
  content: {
    title: "Children",
    type: ControlType.String,
    // @ts-ignore
    defaultValue: System.Button.defaultProps.children,
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    options: ["primary", "secondary", "tertiary"],
    optionTitles: ["primary", "secondary", "tertiary"],
  },
  shape: {
    title: "Shape",
    type: ControlType.Enum,
    options: ["default", "pill", "circle"],
    optionTitles: ["default", "pill", "circle"],
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["button", "submit", "reset"],
    optionTitles: ["button", "submit", "reset"],
  },
  startEnhancer: {
    title: "Start enhancer",
    type: ControlType.String,
  },
  endEnhancer: {
    title: "End enhancer",
    type: ControlType.String,
  },
  onClick: {
    type: ControlType.EventHandler,
  },
  as: {
    title: "As",
    type: ControlType.Enum,
    defaultValue: "button",
    options: [
      "symbol",
      "object",
      "circle",
      "button",
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
    optionTitles: [
      "symbol",
      "object",
      "circle",
      "button",
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
      "animate Motion",
      "animate Transform",
      "clip Path",
      "defs",
      "desc",
      "ellipse",
      "fe Blend",
      "fe Color Matrix",
      "fe Component Transfer",
      "fe Composite",
      "fe Convolve Matrix",
      "fe Diffuse Lighting",
      "fe Displacement Map",
      "fe Distant Light",
      "fe Drop Shadow",
      "fe Flood",
      "fe Func A",
      "fe Func B",
      "fe Func G",
      "fe Func R",
      "fe Gaussian Blur",
      "fe Image",
      "fe Merge",
      "fe Merge Node",
      "fe Morphology",
      "fe Offset",
      "fe Point Light",
      "fe Specular Lighting",
      "fe Spot Light",
      "fe Tile",
      "fe Turbulence",
      "filter",
      "foreign Object",
      "g",
      "image",
      "line",
      "linear Gradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radial Gradient",
      "rect",
      "stop",
      "switch",
      "text",
      "text Path",
      "tspan",
      "use",
      "view",
    ],
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://lighthouse.harbor.school",
    hidden(props) {
      return props.as !== "a"
    },
  },
  target: {
    title: "Target",
    type: ControlType.String,
    hidden(props) {
      return props.as !== "a"
    },
  },
  animate: {
    title: "Animate",
    type: ControlType.Boolean,
    defaultValue: false,
    hidden(props) {
      return !props.startEnhancer
    },
  },
})
