#!/usr/bin/env node

const inquirer=require('inquirer')
// const yargs=require('yargs')
// const {argv}=yargs(process.argv)
// console.log(process.argv)

const printFivemoves=async(pokemonname)=>{
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)

const pokemon=await res.json()
const moves=pokemon.moves.map(({move})=>move.name)
console.log(moves.slice(0,5))
}
const prompt=inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter a Pokemon name to view its 5 moves : "
}]).then((answers)=>{
    const pokemon=answers.pokemon
    printFivemoves(pokemon)
})
// printFivemoves(argv.pokemon)