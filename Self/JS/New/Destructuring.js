const color=['red','green','blue']
const [first,second,third]=color
console.log("first : "+third)
console.log("third : " +first)

const person={
    name:'John',
    age:30,
    city:'New York'
}
const myfun=({name,city,})=>{
        const info={
            name,
            city
        }
        return info
}
const result= myfun(person)
console.log(result)

const student={ 
    name: 'Alice', 
    grades: { math: 90, science: 85, english: 92 
    } 
}
const my_fun=({math,english})=>{
    const extract={
        math,
        english
    }
    return extract
}
const grades=my_fun(student.grades)
console.log(grades)

const values=[10,20]
const [num_1,num_2]=[5,10]
console.log('one :'+num_1)
console.log('two :'+num_2)

const getuserinfo=({username,email,isadmin})=>{
    const data={
        username,
        email,
        isadmin
    }
    return data
}
const giveinfo=getuserinfo(
    {username:'John',
    email:'john@gmail.com',
    isadmin:'False'
    }
)
console.log(giveinfo)

const numbers=[1,2,3,4,5]
const [one,two,...rest]=numbers
console.log('one :'+one)
console.log('two :'+two)
console.log('rest :'+rest)

const car={
    make:'toyota',
    model:'camary',
    year:2022
}
const car_data=({make,model,year})=>{
   const data_car= {
    make,
    model,
    year
   }
   return data_car
}
const given=car_data(car)
console.log(given)

const getpersondetails=({name,age,city,zip})=>{
    const info={
        name,
        age,
        city,
        zip
    }
    return info
}
const get=getpersondetails({name:'Jack',age:24,city:'Chicago',zip:25125})
console.log(get)
