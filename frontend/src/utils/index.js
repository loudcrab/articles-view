export const sorting = (array, isRevers) => {
  return array.sort((a, b) => {
    if (a.date > b.date) {
      return isRevers ? -1 : 1
    }
    if (a.date < b.date) {
      return isRevers ? 1 : -1
    }
    return 0
  })
}
