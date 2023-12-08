import 'react-native-gesture-handler';

import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const index = () => {
  return;
  <ApolloProvider client={client}>
    <App />;
  </ApolloProvider>;
};

export default index;
