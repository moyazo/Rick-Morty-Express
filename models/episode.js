'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Episode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Episode.belongsToMany(models.Character, {
                as: 'characters',
                onDelete: 'CASCADE',
                through: 'episodes_characters',
            })
        }
    }
    Episode.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            air_date: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            episode: {
                allowNull: true,
                type: DataTypes.STRING,
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
            modelName: 'Episode',
        }
    )
    return Episode
}
