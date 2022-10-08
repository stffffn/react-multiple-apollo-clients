import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.spacex.land/graphql/',
  documents: 'src/**/*.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    'src/graphql/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
