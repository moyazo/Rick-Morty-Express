const sharedValues = {
    username: process.env.POSTGRES_USER || 'GQL-Test',
    password: process.env.POSTGRES_PASSWORD || 'GQL-Test',
    database: process.env.POSTGRES_DB || 'GQL-Test',
    port: +process.env.POSTGRES_PORT || '5432',
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres',
}

module.exports = {
    development: {
        logging: true,
        ...sharedValues,
    },
    production: {
        logging: false,
        ...sharedValues,
    },
}
