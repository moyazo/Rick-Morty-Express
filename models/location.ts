import { Model, Sequelize } from 'sequelize'
import { DataType } from 'sequelize-typescript'

class Location extends Model {
    public id!: string
    public api_id!: number
    public name!: string | null
    public type!: string | null
    public dimension!: string | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: any): void {
        Location.hasMany(models.Character, {
            as: 'characters',
            foreignKey: 'locationId',
        })
    }
}
export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
    Location.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            api_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            type: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            dimension: {
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
            modelName: 'Location',
        }
    )

    return Location
}
export { Location }
