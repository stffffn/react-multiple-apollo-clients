import { CountriesSection } from './components/CountriesSection/CountriesSection';
import { SpacexSection } from './components/SpacexSection/SpacexSection';
import { StarWarsSection } from './components/StarWarsSection/StarWarsSection';

export const App: React.FC = () => {
  return (
    <div>
      <h1>React Multiple Apollo Clients</h1>
      <hr />
      <SpacexSection />
      <hr />
      <StarWarsSection />
      <hr />
      <CountriesSection />
    </div>
  );
};
