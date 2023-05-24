import { Sequelize, Model, BuildOptions } from 'sequelize';
import type DataTypesType from 'sequelize/types/data-types'
import { ModelsObject } from './index.types';

export class Location extends Model {
    public id!: string
    public api_id!: number
    public name!: string | null
    public type!: string | null
    public dimension!: string | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: ModelsObject): void {
        Location.hasMany(models.Character, {
            as: 'characters',
            foreignKey: 'locationId',
        })
    }
}

export type LocationStatic = typeof Location & {
    new (values?: object, options?: BuildOptions): Location
}

export default (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
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
