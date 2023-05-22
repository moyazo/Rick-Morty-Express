'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Characters', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            character_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            origin_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            location_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            status: {
                type: Sequelize.ENUM('Alive', 'Dead', 'Unknown'),
                allowNull: true,
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
        await queryInterface.dropTable('Characters')
    },
}
