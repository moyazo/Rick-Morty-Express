'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Character extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Character.belongsTo(models.Location, {
                as: 'origin',
                foreignKey: 'origin_id',
                onDelete: 'SET NULL',
            })
            Character.belongsTo(models.Location, {
                as: 'location',
                foreignKey: 'location_id',
                onDelete: 'SET NULL',
            })
            Character.belongsToMany(models.Episode, {
                as: 'episodes',
                onDelete: 'CASCADE',
                through: 'episodes_characters',
            })
        }
    }
    Character.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            character_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            origin_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            location_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'Character',
            hooks: {
                beforeSave: async (character, option) => {
                    if (!character.origin_id) {
                        character.origin_id = 'Unknown'
                    }
                    if (!character.location_id) {
                        character.location_id = 'Unknown'
                    }
                },
            },
        }
    )
    return Character
}
