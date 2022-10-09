import { useGetAllContinentsQuery } from '../../graphql/generated/countries';

export const CountriesSection: React.FC = () => {
  const { data, loading } = useGetAllContinentsQuery();

  return (
    <section>
      <h2>Countries Apollo Client Data</h2>
      {loading && <span>Loading...</span>}
      <ul>
        {data?.continents?.map((continent, index) => (
          <li key={index}>
            {continent.name} (Code: {continent.code})
          </li>
        ))}
      </ul>
    </section>
  );
};
