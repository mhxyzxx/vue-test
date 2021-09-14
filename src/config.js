export function cleanObj (value) {
  if (value instanceof Array) {
    return value.map((item) => {
      return Object.assign(Object.create(null), item)
    })
  }
  return Object.assign(Object.create(null), value)
}
