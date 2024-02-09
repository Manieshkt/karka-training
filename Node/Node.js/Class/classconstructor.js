class Animal{
    constructor(name,species){
        this.name=name,
        this.species=species
    }
}
class Mammals extends Animal{
    constructor(name,species,legs){
        super()
        this.name=name,
        this.species=species,
        this.legs=legs,
        this.makesound()
    }
    makesound(){
        console.log('hahah')
    }
}
const dog=new Mammals('dog','doggie',4)
const lion=new Animal('lion','leo')
console.log(lion)
console.log(dog)

const myname='maniesh'
for (let i=myname.length-1;i>=0;i--){
    console.log(myname[i])
}

const number=[1,2,3,4,5,6]
const nu=number.reduce((accu,curr)=>Math.max(accu,curr))
console.log(nu) 