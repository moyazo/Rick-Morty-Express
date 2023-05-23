import { Sequelize, Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'

class Character extends Model {
    public id!: string
    public api_id!: number
    public origin_id!: number | string
    public location_id!: number | string
    public name!: string | null
    public gender!: string | null
    public image!: string | null
    public status!: 'Alive' | 'Dead' | 'Unknown' | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: any): void {
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

export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
    Character.init(
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
                beforeSave: async (character, options) => {
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
