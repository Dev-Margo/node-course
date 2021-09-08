//const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes')

//customize yargs version
yargs.version('1.1.0')

//create add comamand
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ', argv.title, 'Body: ', argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing the note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('listing notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note')
    }
})

//add, remove, read, and list notes.

yargs.parse()