const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your Notes...'
}

const removeNote = function (title) {
    const notes = loadNotes()
    const safeNotes = notes.filter(function (note) {
        return note.title !== title
    })
    if (safeNotes.length === notes.length) {
        console.log(chalk.inverse.red(`Note ${title} not found`))
    } else {
        saveNotes(safeNotes)
        console.log(chalk.inverse.green(`Removing note ${title}`))
    }
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}