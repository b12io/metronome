/* eslint-disable import/prefer-default-export, consistent-return */
import { isArray, cloneDeep } from 'lodash'

export function propTypeRegExp(regexp) {
  return (props, propName, componentName) => {
    if (!regexp.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
      )
    }
  }
}

export function reorder(list, sourceIndex, destinationIndex) {
  const newList = cloneDeep(list)
  const [removed] = newList.splice(sourceIndex, 1)
  newList.splice(destinationIndex, 0, removed)
  return newList
}

/**
 * Generate unique id.
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
export function generateId(size = 16) {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < size; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

export const FileHelper = (file) => {
  let fileInfo = {
    isVideo: false,
    isSvg: false,
    isPdf: false,
    filename: '',
    extension: '',
    path: ''
  }

  if (!file) {
    return fileInfo
  }

  const original = file.original || ''
  const filename = original.replace(
    /.*[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}[-.]/,
    ''
  )
  const extension = filename.slice(
    (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1
  )

  fileInfo = {
    isVideo: isArray(original.match('.(mpg|mpeg|mp4|avi|webm|mov)$')),
    isSvg: isArray(original.match('.(svg)$')),
    isPdf: isArray(original.match('.(pdf)$')),
    filename: filename,
    extension: extension,
    path: original
  }

  return fileInfo
}
