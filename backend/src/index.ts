import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const books = [
  { id: '1', title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin' },
  { id: '2', title: 'Beloved', author: 'Toni Morrison' },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT ?? 4000) },
});

console.log(`GraphQL server ready at ${url}`);
