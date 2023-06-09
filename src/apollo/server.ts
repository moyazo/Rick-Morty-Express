import { ApolloServer } from "apollo-server-express";
import resolvers from "../resolvers/resolvers";
import typeDefs from "../typeDefs/testDefs";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
})

export default apolloServer;