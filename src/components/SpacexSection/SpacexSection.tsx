import { useGetAllSpacexDragonsQuery } from '../../graphql/generated/spacex';

export const SpacexSection: React.FC = () => {
  const { data, loading } = useGetAllSpacexDragonsQuery();

  return (
    <section>
      <h2>SpaceX Apollo Client Data</h2>
      {loading && <span>Loading...</span>}
      {data?.dragons?.map((dragon, index) => (
        <div key={index}>
          <h3>{dragon?.name}</h3>
          <span>Active: {dragon?.active?.toString()}</span>
          <p>{dragon?.description}</p>
        </div>
      ))}
    </section>
  );
};
