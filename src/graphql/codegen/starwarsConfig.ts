import { CodegenConfig } from '@graphql-codegen/cli';

const starWarsConfig: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: 'src/**/*.sw.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/starwars.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
        defaultBaseOptions: {
          context: {
            clientName: 'StarWars',
          },
        },
      },
    },
    'src/graphql/generated/starwars.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default starWarsConfig;
