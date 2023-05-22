import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        eldiablo: Eldiablo
    }
    type Eldiablo {
        el: String
        diablo: String
    }
`

export default typeDefs
