const fs = require('fs')

const archivo = '../data/db.json'

const readDB = () => {
    const dataRaw = fs.readFileSync(archivo, {
        encoding: 'utf-8'
    })
    return JSON.parse(dataRaw)


}

module.exports = {
    readDB
}