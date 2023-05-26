const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server-express');
//const {authMiddleware}
//const { typeDefs, resolvers } = require('./schemas');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

module.exports = { typeDefs, resolvers };
async function main(){

    await mongoose.connect('mongodb+srv://michellrahman:AMU2R4Ihqd6yxjkS@cluster0.skg1eyo.mongodb.net/?retryWrites=true&w=majority')
}

main().catch(err => console.log(err));





// Import the ApolloServer class


// Import the two parts of a GraphQL schema



const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

 
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
