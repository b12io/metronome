export const deslugify = (input) => {
  let outputString = input ? String(input) : ''
  outputString = outputString.replace(/[_-]/g, ' ')
  return (
    outputString.charAt(0).toUpperCase() + outputString.substr(1).toLowerCase()
  )
}

export const slugify = (input) => {
  const outputString = input ? String(input) : ''
  return outputString
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of str
    .replace(/-+$/, '') // Trim - from end of str
}

export const titleCase = (input) => {
  const outputString = input ? String(input) : ''
  return outputString.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}

/**
 * Convert snake_case to kebab-case. Needed because input types use
 * both casings in different places.
 *
 * @param {string} input
 */
export const snakeToKebab = (input) => input.replace(/_/g, '-')

/**
 * Convert sentence case to snake_case. Useful for getting field names
 * from labels.
 *
 * @param {string} input
 */
export const spacesToSnake = (input) => input.replace(/\s/g, '_')
