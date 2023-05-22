'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
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
            username: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            photo: {
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
            modelName: 'User',
        }
    )
    return User
}
