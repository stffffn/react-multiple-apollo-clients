import { useGetAllSpacexDragonsQuery } from '../../graphql/generated/spacex';

export const SpacexSection: React.FC = () => {
  const { data } = useGetAllSpacexDragonsQuery();

  return (
    <section>
      <h1>SpaceX Client Data</h1>
      {data?.dragons?.map((dragon, index) => (
        <div key={index}>
          <h2>
            {dragon?.name} (Active: {dragon?.active?.toString()})
          </h2>
          <p>{dragon?.description}</p>
        </div>
      ))}
    </section>
  );
};
