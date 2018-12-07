const connector = require('../dbConnector');
const Sequelize = require('sequelize');
const metaFields = require('./MetaFields');

const {create_dt, update_dt, delete_dt} = metaFields;

const User = connector.define('Admin', {
    no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_dt,
    update_dt,
    delete_dt

},{
    freezeTableName: true,
    underscored: true,
    timestamps: false
})

module.exports = User;