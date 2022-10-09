import { CodegenConfig } from '@graphql-codegen/cli';

const spacexConfig: CodegenConfig = {
  schema: 'https://api.spacex.land/graphql/',
  documents: ['src/**/*.graphql', '!src/**/*.sw.graphql'],
  overwrite: true,
  generates: {
    'src/graphql/generated/spacex.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
      },
    },
    'src/graphql/generated/spacex.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default spacexConfig;
