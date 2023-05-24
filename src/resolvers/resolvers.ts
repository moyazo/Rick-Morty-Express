import { charactersFromApi }  from "../services/api/rickApi";

const resolvers = {
    Query: {
        syncApi: async () => {
            try {
                const synchronized = await charactersFromApi();
                if(!synchronized) {
                    return 'No se puedo sincrinizar los datos';
                }
                return 'Datos sincronizados';
            } catch (error) {
                return 'Error al sincronizar: ' + error.message;
            }
        }
    },
}

export default resolvers
