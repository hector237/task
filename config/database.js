
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
const mongoose = require('mongoose');




const connectionMysql = async () => {


     try {
          await mysql.createConnection({
               host: process.env.DB_HOST,
               user: process.env.DB_USERNAME,
               password: process.env.DB_PASSWORD,
               database: process.env.DB_DATABASE
          });
          console.log("Successful connection")
     }

     catch (error) {
          console.log(error);
          throw new Error('Error when connecting to database')
     }
}


const connectionMongo = async () => {

     try {
          await mongoose.connect(process.env.DB_HOST, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
              
          });
          console.log("Connection succefull")
     } catch (error) {
          console.log(error);
          throw new Error('Error when connecting to database')
     }
}





module.exports = {
     connectionMysql,
     connectionMongo
};