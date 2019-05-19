export const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object
export const capitalize = (str) => {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}