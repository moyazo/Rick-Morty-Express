import { Sequelize, Model, BuildOptions } from 'sequelize'
import { DataType } from 'sequelize-typescript'

class User extends Model {
    public id!: string
    public name!: string | null
    public username!: string | null
    public email!: string
    public password!: string
    public photo!: string | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: any): void {
        // Define las asociaciones aquí
    }
}

export type UserStatic = typeof User & {
    new (values?: object, options?: BuildOptions): User
}

export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
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

export { User }
