import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        lastName: String
        company: String 
        email: String
        age: Int
    }
    type Query {
        getClient(id: ID) : Client
    }
    input InputClient {
        id: ID
        name: String!
        lastName: String!
        company: String! 
        email: String!
        age: Int!
    }
    type Mutation {
        createClient(input: InputClient) : Client
    }
`);

export default schema; 