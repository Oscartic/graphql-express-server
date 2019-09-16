import express from "express";
// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema'; 

const app = express();

app.get('/', (req,res) => {
    res.send('Todo Listo');
});


// el resolver 
const root = {hola: () => "Hola mundo desde GraphQl"};
app.use('/graphql', graphqlHTTP({
    // use schema
    schema,
    // The resolver is passed as rootValue
    rootValue: root,
    // use graphiql 
    graphiql: true
}));

app.listen(8000, () => console.log("El servidor corre en el puerto 8000"));