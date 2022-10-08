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

describe('App', () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={[dragonsMock]} addTypename={false}>
        <SpacexSection />
      </MockedProvider>
    );
    await act(() => wait(0));
  });

  it('should render the first dragon entry', () => {
    const headline = screen.getByRole('heading', {
      level: 2,
      name: firstEntry.name,
    });
    const description = screen.getByText(firstEntry.description);
    expect(headline).toBeVisible();
    expect(description).toBeVisible();
  });

  it('should render the second dragon entry', () => {
    const headline = screen.getByRole('heading', {
      level: 2,
      name: secondEntry.name,
    });
    const description = screen.getByText(secondEntry.description);
    expect(headline).toBeVisible();
    expect(description).toBeVisible();
  });
});
