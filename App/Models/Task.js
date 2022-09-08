//Importations

const { v4: uuidv4 } = require('uuid');

class Task{
    id = 0;
    name = "";
    category = "";
    status = false;
    description = "";

    constructor(name = "", category = "", description = "" ){
        this.id = uuidv4();
        this.name = name;
        this.category = category;
        this.description = description;
    }

    get name(){
        return this.name;
    }
    get category (){
        return this.category;
    }
    get status(){
        return this.status;
    }
    get category(){
        return this.category;
    }
    
}


module.exports = Task;
