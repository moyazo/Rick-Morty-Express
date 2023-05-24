import path from 'path'
import { Sequelize, Dialect, Options } from 'sequelize'
import process from 'process'

type DBConfig = {
  username: string
  password: string
  database: string
  port: number
  host: string
  dialect: Dialect
  replicaHost?: string
}

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '/../../config/sequelize.js'))[
  env
] as DBConfig

const sequelizeOptions: Options = config

if (config.replicaHost) {
  sequelizeOptions.replication = {
    read: [
      {
        host: config.replicaHost,
      },
    ],
    write: {
      host: config.host,
    },
  }
  sequelizeOptions.host = null as unknown as undefined
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  sequelizeOptions
)

export default sequelize