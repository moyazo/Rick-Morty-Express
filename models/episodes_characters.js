'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Episodes_Characters extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Episodes_Characters.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            character_id: {
                allowNull: true,
                type: DataTypes.STRING,
                references: {
                    model: 'Character',
                    key: 'id',
                },
            },
            episode_id: {
                allowNull: true,
                type: DataTypes.STRING,
                references: {
                    model: 'Episode',
                    key: 'id',
                },
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
            modelName: 'Episodes_Characters',
        }
    )
    return Episodes_Characters
}
