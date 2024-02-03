const url=require('url')

const myurl=new URL('http://mywebsite.com/hello.html?id=100&status=active')

console.log(myurl)

//gets the port
console.log(myurl.host)

//does not get the port
console.log(myurl.hostname)

console.log(myurl.pathname)

console.log(myurl.search)

console.log(myurl.searchParams)

myurl.searchParams.append('abc','123')
console.log(myurl.searchParams)

myurl.searchParams.forEach((values,name)=>console.log(name,values))