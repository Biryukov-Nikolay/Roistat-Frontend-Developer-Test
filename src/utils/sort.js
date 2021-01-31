export const sortUsers = (array, value) => {
  return array.sort((a, b) => {
    const nameA = a[value].toLowerCase()
    const nameB = b[value].toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}
