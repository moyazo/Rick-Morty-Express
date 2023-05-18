import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()

const startApp = () => {
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
            console.log(`App running on ${port}`);
        })
    } catch (error) {
        console.log(`Error at starting the app: ${error.message}`);
        process.exit(1);
    }
}

startApp();
