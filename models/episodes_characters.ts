import { Sequelize, Model, BuildOptions } from 'sequelize'
import { DataType } from 'sequelize-typescript'

class Episodes_Characters extends Model {
    public id!: string
    public character_id!: string | null
    public episode_id!: string | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: any): void {
        // Define las asociaciones aquí
    }
}

export type Episodes_CharactersStatic = typeof Episodes_Characters & {
    new (values?: object, options?: BuildOptions): Episodes_Characters
}

export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
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
