export function getPaddingPros(props) {
  const paddingTop = props.paddingTop + "px"
  const paddingRight = props.paddingRight + "px"
  const paddingBottom = props.paddingBottom + "px"
  const paddingLeft = props.paddingLeft + "px"

  return { paddingTop, paddingRight, paddingBottom, paddingLeft }
}
export function getMarginPros(props) {
  const marginTop = props.marginTop + "px"
  const marginRight = props.marginRight + "px"
  const marginBottom = props.marginBottom + "px"
  const marginLeft = props.marginLeft + "px"

  return { marginTop, marginRight, marginBottom, marginLeft }
}
