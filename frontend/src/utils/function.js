export const omit = (object, field) => {
  const { [field]: omitted, ...other } = object
  return other
}
