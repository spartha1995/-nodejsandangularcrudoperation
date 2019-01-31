import * as Sequelize from 'sequelize';
export const sequelize = new Sequelize('nodecrud', 'root', 'Promact2017', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
         acquire: 30000,
        idle: 10000
    },
     // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});