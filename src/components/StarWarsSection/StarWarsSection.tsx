import { useGetAllPlanetsQuery } from '../../graphql/generated/starwars';
import './StarWarsSection.css';

export const StarWarsSection: React.FC = () => {
  const { data, loading } = useGetAllPlanetsQuery();

  return (
    <section>
      <h2>Star Wars Apollo Client Data</h2>
      <div className="starWarsSection">
        {loading && <span>Loading...</span>}
        <ul>
          {data?.allPlanets?.planets?.map((planet, index) => (
            <li key={index}>
              {planet?.name} (Population: {planet?.population?.toString()},
              Gravity: {planet?.gravity})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
