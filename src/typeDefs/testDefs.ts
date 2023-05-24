import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        syncApi: String
    }
`

export default typeDefs
