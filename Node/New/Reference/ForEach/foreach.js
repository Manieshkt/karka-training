const num=[1,2,3,4,5]
const newarr=num.forEach((num)=>console.log(num))

const newNum=[1,2,3,4,5]
const newNumarr=[]
newNum.forEach((num)=>newNumarr.push(num*2))
console.log(newNum)
console.log(newNumarr)

let sum=0
num.forEach((num)=>{sum+=num})
console.log(sum)
