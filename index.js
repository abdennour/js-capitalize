const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1)
module.exports = capitalize
module.exports.words = (str) => str.split(' ').map(word => capitalize(word)).join(' ')
