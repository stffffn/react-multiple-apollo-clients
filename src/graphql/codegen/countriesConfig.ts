import { CodegenConfig } from '@graphql-codegen/cli';
import { API, countriesURL } from '../ApolloClients';

const countriesConfig: CodegenConfig = {
  schema: countriesURL,
  documents: 'src/**/*.countries.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/countries.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
        defaultBaseOptions: {
          context: {
            clientName: API.Countries,
          },
        },
      },
    },
    'src/graphql/generated/countries.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default countriesConfig;
