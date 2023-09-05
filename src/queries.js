import { Model, Op } from 'sequelize';
import { Animal, Human } from './model.js';

//Example problem
//I have a model Dealership which has many Cars
//Get all cars belonging to Dealership with primary key 1
// export const query0 = await Dealership.findByPk(1).getCars()
// ^^This won't work. You can't string it this way because it makes it a promise.
// export const query0 = await (await Dealership.findByPk(1)).getCars()
// ^^ This will now work

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2)

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({where: {species: 'fish'}})

// Get all animals belonging to the human with primary key 5
// export const query3 = await Human.findByPk(5,{include:Animal})

export const query3 = await Animal.findAll({where: {humanId: 5}})

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({where: {birthYear: {[Op.gt]: 2015}}});

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({where: {fname: {[Op.startsWith]: 'J'}}})

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({where: {birthYear: {[Op.is]: null}}})

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({where: {species: {[Op.or]: ['fish','rabbit']}}})

// Get all the humans who DON'T have an email address that contains "gmail"
// export const query8 = await Human.findAll({where: {email: {[Op.notLike]: 'gmail'}}})
export const query8 = await Human.findAll({ where: { [Op.not]: { email: { [Op.substring]: 'gmail'}}}})

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals

export async function printHumansAndAnimals() {

    //? Problem solved during class
    let directory = ''

    let humans = await Human.findAll()

    for ( let i = 0; i < humans.length; i++) {
        let human = humans[i]

        directory += human.getFullName() + '\n'
        // directory += 'Bob' + '\n'

        let animals = await human.getAnimals()

        for (let k = 0; k < animals.length; k++) {
            let animal = animals[k]

            directory += '- ' + animal.name + ', ' + animal.species + '\n'
        }
    }
    directory = directory.slice(0, -1)
    
    return directory

    //? Incorrect code
    // const table = await Human.findAll({include: Animal})
    // return table
    // for (const human of table) {
    //         console.log(`${human.fname} ${human.lname}`)
    //         for (const animal of table.Animal) {
    //                 console.log(`- ${animal.name}, ${animal.species}`)
    //             }
    //         }
}
console.log(1000,await printHumansAndAnimals())

// Return a Set containing the full names of all humans
// with animals of the given species.
//? Problem solved during class
export async function getHumansByAnimalSpecies(species) {
    const humansSet = new Set()

    const animals = await Animal.findAll({where:{species}})

    for(let i = 0; i < animals.length; i++) {
        let animal = animals[i]

        humansSet.add(await animal.getHuman()).getFullName()
    }
    return humansSet
}
