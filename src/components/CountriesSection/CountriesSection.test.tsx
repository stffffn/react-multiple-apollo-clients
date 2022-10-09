import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';
import { wait } from '@testing-library/user-event/dist/utils';
import { CountriesSection } from './CountriesSection';
import { GetAllContinentsDocument } from '../../graphql/generated/countries';

const firstEntry = {
  name: 'Continent1',
  code: 'c1',
};

const secondEntry = {
  name: 'Continent2',
  code: 'c2',
};

const continentsMock = {
  request: {
    query: GetAllContinentsDocument,
  },
  result: {
    data: {
      continents: [firstEntry, secondEntry],
    },
  },
};

describe('CountriesSection', () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={[continentsMock]} addTypename={false}>
        <CountriesSection />
      </MockedProvider>
    );
    await act(() => wait(0));
  });

  it('should render the first continent entry', () => {
    const listItem = screen.getAllByRole('listitem')[0];
    expect(listItem).toHaveTextContent(
      `${firstEntry.name} (Code: ${firstEntry.code})`
    );
  });

  it('should render the second continent entry', () => {
    const listItem = screen.getAllByRole('listitem')[1];
    expect(listItem).toHaveTextContent(
      `${secondEntry.name} (Code: ${secondEntry.code})`
    );
  });
});
