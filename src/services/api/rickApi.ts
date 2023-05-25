import models from '../../../models/index';
import { ModelsObject } from '../../../models/index.types'
/* public id!: string
public api_id!: number
public origin_id!: number | string
public location_id!: number | string
public name!: string | null
public gender!: string | null
public image!: string | null
public status!: 'Alive' | 'Dead' | 'Unknown' | null*/


export async function locationsFromApi() {
    try {
        for (let i = 1; i < 8; i++) {
        const response = await fetch(
            `https://rickandmortyapi.com/api/location?page=${i}`
        );
        const data = await response.json();
        const results = data.results;

        const dataResults = results.map((d) => ({
            api_id: d.id,
            name: d.name,
            type: d.type,
            dimension: d.dimension,
        }));

        const itemstoCreation = [];
        const existedResults = await models.Location.findAll();

        for (const item of dataResults) {
            const match = existedResults.find(
                (existedResult) => existedResult.api_id === item.api_id
            );
            if (!match) {
                itemstoCreation.push(item);
            }
        }

        if (itemstoCreation.length > 0) {
            models.Location.bulkCreate(itemstoCreation);
            
        }
    }
    return await charactersFromApi();

    } catch (error) {
        return 'Error: ' + error.message;
    }
}

export async function charactersFromApi(): Promise<boolean> {
    try {
        for (let i = 1; i < 42; i++) {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
            const data = await response.json();
            const results = data.results;

            const responseResults = await Promise.all(results.map(async (result) => {
            const origin = result.origin.url.split('/')[5];
            const location =  result.location.url.split('/')[5];
                return {
                    api_id: result.id,
                    origin_id: origin ? origin : null,
                    location_id: location ? location : null,
                    name: result.name,
                    status: result.status.charAt(0).toUpperCase() + result.status.slice(1),
                    gender: result.gender,
                    species: result.species,
                    image: result.image
                };
            }));
            
            const characterToCreate = [];
            const existedResults = await models.Character.findAll();
            for (const item of responseResults) {
                const match = existedResults.find(
                    (existedResult) =>
                        existedResult.api_id === item.api_id
                );
                if (!match) {
                    characterToCreate.push(item);
                }
            }

            if (characterToCreate.length > 0) {
                models.Character.bulkCreate(characterToCreate);
            }
        }
        
        return true;
    } catch (error) {
        console.log('Error al sincronizar los personajes ' + error.message);
    }
}




/*async function getEpisodes() {
    try {
        for (let i = 0;i < 3;i++) {
            const response = await fetch(
                `https://rickandmortyapi.com/api/episode?page=${page}`
            );
            const data = await response.json();
            const results = data.results;
    
            const dataResults = results.map((d) => ({
                episodeId: d.id,
                name: d.name,
                air_date: d.air_date,
                episode: d.episode,
            }));
    
            const itemstoCreation = [];
            const existedResults = await models.episode.findAll();
    
            for (const item of dataResults) {
                const match = existedResults.find(
                    (existedResult) => existedResult.api_id === item.episodeId
                );
                if (!match) {
                    itemstoCreation.push(item);
                }
            }
    
            if (itemstoCreation.length > 0) {
                Episode.bulkCreate(itemstoCreation);
                return 'Sincronizando base de datos';
            }
    
            return 'No hay datos nuevos para guardar en la base de datos';
        }
        
    } catch (error) {
        console.log(error.message);
    }
}*/
