import express, { Router } from "express";
import { charactersFromApi } from '../services/api/rickApi';
import apolloServer from "../apollo/server";
const router: Router = express.Router();


// ruta para sincronizar la api

router.get("/", async (req, res) => {
    try {
        const { data } = await apolloServer.executeOperation({
            query: `
                query {
                    syncApi
                }
            `,
        });
        if (!data) {
            return res.status(403).json('No hay data' + data);
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

export default router;