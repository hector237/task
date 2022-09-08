
//Importations
const fs = require('fs');
//global's variables
const file = "../../database/list.json"

//Methods
const saveTask = ( data ) => fs.writeFileSync(file,JSON.stringify(data));

const loadTask = () =>{
    if (!fs.existsSync(file)) return null;

    const rawdata = JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
    return rawdata;
}

module.exports = {
    saveTask,
    loadTask,
}