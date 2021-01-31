export const formattingNumbers = (value) => {
  const num = value.replace(/\D/g, '').split(/(?=.)/)
  const i = num.length - 1
  if (i >= 0) num.unshift('+ ')
  if (i >= 1) num.splice(2, 0, ' ')
  if (i >= 4) num.splice(6, 0, ' ')
  if (i >= 7) num.splice(10, 0, '-')
  if (i >= 9) num.splice(13, 0, '-')
  return num.join('')
}
