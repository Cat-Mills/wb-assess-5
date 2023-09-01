import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

//Example problem
//I have a model Dealership which has many Cars
//Get all cars belonging to Dealership with primary key 1
// export const query0 = await Dealership.findByPk(1).getCars()
// ^^This won't work. You can't string it this way because it makes it a promise.
export const query0 = await (await Dealership.findByPk(1)).getCars()
// ^^ This will now work

// Get the human with the primary key 2
export const query1 = null;

// Get the first animal whose species is "fish"
export const query2 = null;

// Get all animals belonging to the human with primary key 5
export const query3 = null;

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = null;

// Get all the humans with first names that start with "J"
export const query5 = null;

// Get all the animals who don't have a birth year
export const query6 = null;

// Get all the animals with species "fish" OR "rabbit"
export const query7 = null;

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = null;

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {}
