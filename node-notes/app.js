//const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const notes = getNotes()

console.log(notes)

console.log(chalk.green('Success!'))