import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { SpacexSection } from './SpacexSection';
import { GetAllSpacexDragonsDocument } from '../../graphql/generated/spacex';
import { act } from 'react-dom/test-utils';
import { wait } from '@testing-library/user-event/dist/utils';

const firstEntry = {
  name: 'Test1',
  description: 'Desc1',
  active: true,
};

const secondEntry = {
  name: 'Test2',
  description: 'Desc2',
  active: true,
};

const dragonsMock = {
  request: {
    query: GetAllSpacexDragonsDocument,
  },
  result: {
    data: {
      dragons: [firstEntry, secondEntry],
    },
  },
};

describe('SpaceXSection', () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={[dragonsMock]} addTypename={false}>
        <SpacexSection />
      </MockedProvider>
    );
    await act(() => wait(0));
  });

  it('should render the first dragon entry headline', () => {
    const headline = screen.getByRole('heading', {
      level: 3,
      name: firstEntry.name,
    });
    expect(headline).toBeVisible();
  });

  it('should render the first dragon entry description', () => {
    const description = screen.getByText(firstEntry.description);
    expect(description).toBeVisible();
  });

  it('should render the second dragon entry headline', () => {
    const headline = screen.getByRole('heading', {
      level: 3,
      name: secondEntry.name,
    });
    expect(headline).toBeVisible();
  });

  it('should render the second dragon entry description', () => {
    const description = screen.getByText(secondEntry.description);
    expect(description).toBeVisible();
  });
});
