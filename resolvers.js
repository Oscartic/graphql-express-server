class Client {
    constructor(id,{name, lastName, company, email, age}){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.company = company;
        this.email = email;
        this.age = age;
    }
}

const clientsDB = {};

// el resolver 
const resolvers = {
    getClient : ({id}) => {
        return new Client(id, clientsDB[id]);
    },
    createClient : ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientsDB[id] = input;
        return new Client(id, input);
    }
};

export default resolvers; 