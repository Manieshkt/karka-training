// const superHero=require('./superhero')
// console.log(superHero.getName())

// superHero.setName('Superman')
// console.log(superHero.getName())

// const newsuperHero=require('./superhero')
// console.log(newsuperHero.getName())

const superHero=require('./superhero')

const batman=new superHero('Batman')
console.log(batman.getName())
batman.setName('Bruce Wayne')
console.log(batman.getName())

const superman=new superHero('Superman')
console.log(superman.getName())
