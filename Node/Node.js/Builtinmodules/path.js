const path=require('path')

console.log(__dirname)
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))
console.log(path.isAbsolute(__filename))

console.log(path.join('folder1','folder2','path.js'))
console.log(path.join('/folder1','folder2','path.js'))
console.log(path.join('folder1','//folder2','path.js'))
console.log(path.join('/folder1','//folder2','../path.js'))
console.log(path.join(__dirname,'data.json'))

//path.resolve
console.log(path.resolve('folder1','folder2','path.js'))
console.log(path.resolve('/folder1','folder2','path.js'))

//here it considers folder 2 as the root
console.log(path.resolve('folder1','//folder2','path.js'))
console.log(path.resolve('/folder1','//folder2','../path.js'))

console.log(path.resolve(__dirname,'data.json'))
