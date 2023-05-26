const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
const path = require('path');
//const {authMiddleware}
//const { typeDefs, resolvers } = require('./schemas');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
dotenv.config()

module.exports = { typeDefs, resolvers };
async function main(){

    await mongoose.connect(process.env.mongodb_uri)
}

main().catch(err => console.log(err));





// Import the ApolloServer class


// Import the two parts of a GraphQL schema




const server = new ApolloServer({
  typeDefs,
  resolvers,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../client/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  })
}

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
