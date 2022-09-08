
/**This file is established the configuration of the conection to the database, The type of conecction depends of the enviorement's variable DB_DRIVER
 * 
 * the options could be 
 * ---mysql
 * ---postgre
 * ---mongo
 * ---others
 */
require('dotenv').config();
const mysql = require('mysql');


class BD {

 connection()  {
    
    
  return   mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});}
constructor(){
     this.connection();
}
}
 
module.exports = BD;