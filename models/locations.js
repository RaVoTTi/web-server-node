const { readDB} = require('../helpers/functionsDB')
const Location = require('./location')

class Locations{

    constructor(){
        this.locations = readDB 
    }

}
module.exports = Locations
