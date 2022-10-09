import { ApolloClient } from '@apollo/client';
import React from 'react';
import {
  API,
  countriesApolloClient,
  spacexApolloClient,
  starWarsApolloClient,
} from '../graphql/ApolloClients';

const apolloMultiClientContext = React.createContext<{
  getClient(clientName: string | undefined): ApolloClient<any> | undefined;
}>({
  getClient() {
    return undefined;
  },
});

export const useApolloMultiClient = () => {
  return React.useContext(apolloMultiClientContext);
};

export const ApolloMultiClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getClient = (clientName: string) => {
    return (
      {
        [API.StarWars]: starWarsApolloClient,
        [API.Countries]: countriesApolloClient,
      }[clientName] ?? spacexApolloClient
    );
  };

  return (
    <apolloMultiClientContext.Provider
      value={{ getClient }}
      children={children}
    />
  );
};
