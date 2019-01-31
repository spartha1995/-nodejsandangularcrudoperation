import * as sql from '../sql-connection/sqlconnection';
import * as Sequelize from 'sequelize';

export class EmployeeAC {
    id: number;
    firstname: string;
    lastname:string;
    email:string;
}

export const Employee = sql.sequelize.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastname : {
        type:Sequelize.STRING,
        allowNull :true
    },
    email:{
         type: Sequelize.STRING,
        allowNull: true
    }
});