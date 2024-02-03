const num=[21,12,123,23,3,4]
const sum=num.reduce((accumulator,current)=>accumulator+current,0)
console.log(sum)

const even=[12,2,12,12,11,24,242,5,3,1,3,2]
const evenNum=even.filter(a=>a%2==0)
console.log(evenNum)

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Chaplin', age: 18 },
  ]
  const ageFilter=people.filter(a=>a.age<=22)
  console.log(ageFilter)

  let score = [
    { name: 'Alice', score: 25 },
    { name: 'Bob', score: 30 },
    { name: 'Charlie', score: 22 },
    { name: 'Chaplin', score: 18 },
  ]
  const increaseScore=score.map(a=>a.score+10)
  console.log(increaseScore)

  const search=[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Chaplin', age: 18 },
  ]
  const filterPerson=search.filter(a=>a.name==='Alice')
  if (filterPerson){
    console.log(filterPerson)
  }
  else{
    console.log('not found')
  }

  const amount=[
    { name: 'Alice', amount: 25 },
    { name: 'Bob', amount: 30 },
    { name: 'Charlie', amount: 22 },
    { name: 'Chaplin', amount: 18 },
  ]
  const amountSum=amount.map(a=>a.amount)
  console.log(amountSum)
  const Total=amountSum.reduce((acc,current)=>acc+current,0)
  console.log(Total)

  const square=[2,3,4,5]
  const squareRoot=square.map(a=>a*a)
  console.log(squareRoot)

  const duplicate=[1,23,3,4,51,1,1,3,3,3,4,12,12,10,10,11,11,2,3,32,32,23,23,43,43,34,34]
  const unique=[...new Set(duplicate)]
  console.log(unique)

  const People = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Mike', lastName: 'Johnson' },
  ];
  const name=People.map(a=>a.firstName+' '+(a.lastName))
  console.log(name)

  const objectsArray = [
    { property1: 'value1', property2: 'value2' },
    { property1: 'value3', property2: 'value4' },
    { property1: 'value5', property2: 'value6' },
  ];
  const log=objectsArray.forEach((values,name)=>  console.log(name,values))

  const star=[1,2,3,4,5,6,1,1,3,1]
  for (let i=0;i<star.length;i++){
  if (star[i]===1){
    star[i]='*'
    }
  }    
  console.log(star)
  const replace=star.map(a=>a===1?'*':a)
  console.log(replace)