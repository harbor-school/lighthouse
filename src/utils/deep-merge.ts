export default function deepMerge(target, ...sources) {
  target = target || {}
  const len = sources.length
  let obj
  let value
  for (let i = 0; i < len; i++) {
    obj = sources[i] || {}
    for (const key in obj) {
      if (typeof obj[key] !== undefined) {
        value = obj[key]
        if (isCloneable(value)) {
          target[key] = deepMerge(
            /* eslint-disable-next-line no-mixed-operators */
            target[key] || (Array.isArray(value) && []) || {},
            value
          )
        } else {
          target[key] = value
        }
      }
    }
  }
  return target
}
function isCloneable(obj) {
  /* eslint-disable-next-line eqeqeq */
  return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]"
}
