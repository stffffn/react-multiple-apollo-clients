import { render, screen, within } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';
import { wait } from '@testing-library/user-event/dist/utils';
import { GetAllPlanetsDocument } from '../../graphql/generated/starwars';
import { StarWarsSection } from './StarWarsSection';

const firstEntry = {
  name: 'PlanetName1',
  gravity: 'Gravity1',
  population: 1,
};

const secondEntry = {
  name: 'PlanetName2',
  gravity: 'Gravity2',
  population: 2,
};

const planetsMock = {
  request: {
    query: GetAllPlanetsDocument,
  },
  result: {
    data: {
      allPlanets: {
        planets: [firstEntry, secondEntry],
      },
    },
  },
};

describe('StarWarsSection', () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={[planetsMock]} addTypename={false}>
        <StarWarsSection />
      </MockedProvider>
    );
    await act(() => wait(0));
  });

  it('should render the first planet entry', () => {
    const listItem = screen.getAllByRole('listitem')[0];
    expect(listItem).toHaveTextContent(
      `${firstEntry.name} (Population: ${firstEntry.population}, Gravity: ${firstEntry.gravity})`
    );
  });

  it('should render the second planet entry', () => {
    const listItem = screen.getAllByRole('listitem')[1];
    expect(listItem).toHaveTextContent(
      `${secondEntry.name} (Population: ${secondEntry.population}, Gravity: ${secondEntry.gravity})`
    );
  });
});
