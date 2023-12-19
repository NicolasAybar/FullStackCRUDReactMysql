import {Sequelize} from 'sequelize'

const db = new Sequelize('system', 'root','',{
    host:'localhost',
    dialect: 'mysql',
})
export default db