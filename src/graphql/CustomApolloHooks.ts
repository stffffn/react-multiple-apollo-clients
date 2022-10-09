import * as Apollo from '@apollo/client';
import { TaggedTemplateExpression } from 'typescript';
import { spacexApolloClient, starWarsApolloClient } from './ApolloClients';

// Re-export everything else that has not been changed
export * from '@apollo/client';

export function useQuery<TData = any, TVariables = Apollo.OperationVariables>(
  query:
    | Apollo.DocumentNode
    | Apollo.TypedDocumentNode<TaggedTemplateExpression, TVariables>,
  options?: Apollo.QueryHookOptions<TData, TVariables>
): Apollo.QueryResult<TData, TVariables> {
  const newOptions: Apollo.QueryHookOptions<TData, TVariables> = {
    ...options,
    client:
      options?.context?.['clientName'] === 'StarWars'
        ? starWarsApolloClient
        : spacexApolloClient,
  };

  return Apollo.useQuery<TData, TVariables>(query, newOptions);
}
