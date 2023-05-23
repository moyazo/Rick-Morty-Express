import { Sequelize, Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'

class Episode extends Model {
    public id!: string
    public api_id!: number
    public name!: string | null
    public air_date!: Date | null
    public episode!: string | null
    public createdAt!: Date
    public updatedAt!: Date

    // Define las asociaciones
    public static associate(models: any): void {
        Episode.belongsToMany(models.Character, {
            as: 'characters',
            onDelete: 'CASCADE',
            through: 'episodes_characters',
        })
    }
}

export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
    Episode.init(
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

export { Episode }
