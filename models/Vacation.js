const connector = require('../dbConnector');
const Sequelize = require('sequelize');
const metaFields = require('./MetaFields');

const {create_dt, update_dt, delete_dt} = metaFields;

const Vacation = connector.define('Vacation', {
    no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDelete:{
        type: Sequelize.BOOLEAN,
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

module.exports = Vacation;