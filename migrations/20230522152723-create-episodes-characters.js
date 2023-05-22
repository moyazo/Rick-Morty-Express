'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Episodes_Characters', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            character_id: {
                allowNull: true,
                type: Sequelize.STRING,
                references: {
                    model: 'Character',
                    key: 'id',
                },
            },
            episode_id: {
                allowNull: true,
                type: Sequelize.STRING,
                references: {
                    model: 'Episode',
                    key: 'id',
                },
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
        await queryInterface.dropTable('Episodes_Characters')
    },
}
