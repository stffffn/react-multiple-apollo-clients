# React Multiple Apollo Clients

- [React Multiple Apollo Clients](#react-multiple-apollo-clients)
  - [What](#what)
  - [Why](#why)
  - [Implementation](#implementation)
    - [GraphQL APIs](#graphql-apis)
    - [GraphQL Code Generator](#graphql-code-generator)
    - [API Differentiation](#api-differentiation)
      - [Hooks](#hooks)
      - [Autocompletion](#autocompletion)
  - [Usage](#usage)
    - [Prerequisites](#prerequisites)
    - [Important Scripts](#important-scripts)
      - [`npm run graphql-update`](#npm-run-graphql-update)
      - [`npm start`](#npm-start)
      - [`npm test`](#npm-test)

## What

This is a very basic and rough [React](https://reactjs.org/) Typescript example project on how to implement multiple [Apollo Clients](https://www.apollographql.com/apollo-client) with [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) and without the usage of any additional packages.

## Why

GraphQL is all about a single endpoint, but what if you have to implement something like a third party API and you still want to keep the advantages of GraphQL Code Generator which make your life so much easier?

Well, here we go:

## Implementation

### GraphQL APIs

This example implements three different Apollo Clients for the following public GraphQL APIs:

- [SpaceX](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home) (as a default API)
- [Star Wars](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home)
- [Countries](https://studio.apollographql.com/public/countries/variant/current/home)

### GraphQL Code Generator

[GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) is used to generate the typings, hooks and schemas. The different APIs use their own code generator configuration files:

- SpaceX: [`spacexConfig.ts`](src/graphql/codegen/spacexConfig.ts)
- Star Wars: [`starWarsConfig.ts`](src/graphql/codegen/starWarsConfig.ts)
- Countries: [`countriesConfig.ts`](src/graphql/codegen/countriesConfig.ts)

They generate the following file types for all APIs:

- `<apiName>.ts` containing Typescript types and react hooks for the queries:
  - [`spacex.ts`](src/graphql/generated/spacex.ts)
  - [`starwars.ts`](src/graphql/generated/starwars.ts)
  - [`countries.ts`](src/graphql/generated/countries.ts)
- `<apiName>.schema.json` containing the GraphQL schema used only for IDE autocompletion:
  - [`spacex.schema.json`](src/graphql/generated/spacex.schema.json)
  - [`starwars.schema.json`](src/graphql/generated/starwars.schema.json)
  - [`countries.schema.json`](src/graphql/generated/countries.schema.json)

### API Differentiation

The differentiation between the APIs is very important to not run into any type duplications or other potential conflicts. Additionally this allows for API specific autocompletion and hooks for the queries.

#### **Hooks**

For the automatically generated query hooks, this is achieved by adding specific client names to the code generator config files (except for the default API) and by using custom Apollo hooks ([`CustomApolloHooks.ts`](src/graphql/CustomApolloHooks.ts)) which only add the respective Apollo Client to the hook.

In the end the generated hooks for the queries already include a reference to the API specific Apollo Client and you can just use it in your React components, like
`use<QueryName>Query()`. This hook returns an object containing for example: `data`, `error` and `loading`.

#### **Autocompletion**

This is achieved by using suffixes in the GraphQL filenames, e.g. `<filename>.sw.graphql` or `<filename>.countries.graphql`. The default API (in this case SpaceX) doesn't need any additional suffix and the files can just be named `<filename>.graphql`.

The connection between certain filenames and schemas is specified in [`.graphqlrc.json`](.graphqlrc.json)

## Usage

### Prerequisites

1. Make sure you have a GraphQL extension for your IDE installed to be able to use autocompletion
2. Clone this respository
3. Navigate to the directory
4. Install packages with `npm i`
5. Run the application with `npm start`

### Important Scripts

#### `npm run graphql-update`

This will run the scripts `update-graphql:spacex`, `update-graphql:starwars` and `update-graphql:countries` which generate the aforementioned files for types, hooks and schemas.

#### `npm start`

Will also run the `graphql-update` script in addition to `npm run serve`

#### `npm test`

Some very basic tests have been added to ensure that mocking of queries is also working.
