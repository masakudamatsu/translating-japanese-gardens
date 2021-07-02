import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Timeline from './Timeline';

const mockProps = {};

test('changes the priority prop value with the indexPage prop', () => {
  render(<Timeline {...mockProps} indexPage />);
  expect(
    screen.getByAltText('A view of Ryoanji Rock Garden'),
  ).not.toHaveAttribute('loading', 'lazy');
});

test('is accessible', async () => {
  await act(async () => {
    const {container} = render(<Timeline {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
