import express, { Express, Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import typeDefs from './src/typeDefs/testDefs'
import resolvers from './src/resolvers/resolvers'
const app = express()

const startApp = async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    dotenv.config()
    app.use(cors())
    const port = process.env.PORT || 8000
    app.use(bodyParser.json())
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    try {
        app.listen(port, () => {
            console.log(`App running on ${port}`)
        })
    } catch (error) {
        console.log(`Error at starting the app: ${error.message}`)
        process.exit(1)
    }
}

startApp()
