/**
 * Created by Shan on 4/11/2018.
 */

import * as Sequelize from "Sequelize";
import jobDefinition from  './Definitions/jobDefinition';


class databaseConnection {

    connection: Sequelize.Sequelize;

    constructor() {
        this.init();
        this.addDefinitions();
    }

    private init() {
        this.connection = new Sequelize('bap_database', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql',
            define: {
                timestamps: false
            }
        })
    }


    private addDefinitions(){
        this.connection.define('job', jobDefinition)
    }

    public test() {
        this.connection
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

}

const connection = new databaseConnection();
connection.test()

export default connection.connection;