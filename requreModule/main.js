const loadModule = require('./myRequireFunction')

const {sumAllNumber} = loadModule('./sum.js')
const {a} = loadModule('./name.js')


console.log(sumAllNumber(12,34,56))
console.log(a)