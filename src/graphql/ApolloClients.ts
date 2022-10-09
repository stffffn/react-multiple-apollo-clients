import { ApolloClient, InMemoryCache } from '@apollo/client';

export enum API {
  SpaceX = 'SpaceX',
  StarWars = 'StarWars',
  Countries = 'Countries',
}

export const spacexURL = 'https://api.spacex.land/graphql/';
export const starWarsURL =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';
export const countriesURL = 'https://countries.trevorblades.com/graphql';

export const spacexApolloClient = new ApolloClient({
  uri: spacexURL,
  cache: new InMemoryCache(),
});

export const starWarsApolloClient = new ApolloClient({
  uri: starWarsURL,
  cache: new InMemoryCache(),
});

export const countriesApolloClient = new ApolloClient({
  uri: countriesURL,
  cache: new InMemoryCache(),
});
