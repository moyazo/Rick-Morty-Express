'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Locations', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            api_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            type: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            dimension: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Locations')
    },
}
