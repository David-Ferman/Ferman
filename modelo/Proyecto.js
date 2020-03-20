const Sequelize=require('sequelize');
const db=require('../config/db');
const Proyectos=db.define('reg',{
nick:{
type:Sequelize.STRING,
primaryKey:true
},
nombre:Sequelize.STRING,
apellido:Sequelize.STRING,
email:Sequelize.STRING,
password:Sequelize.STRING,
puesto:Sequelize.STRING,
});

module.exports=Proyectos;