export const isEmpty = (obj) =>
  obj === undefined || (Object.keys(obj).length === 0 && obj.constructor === Object)
