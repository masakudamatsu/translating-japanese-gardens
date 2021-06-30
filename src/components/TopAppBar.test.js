import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TopAppBar from './TopAppBar';
import {colour} from 'src/utils/colorScheme';

const mockProps = {};

// see cypress/e2e/topAppBar.js for testing the user's scroll action

test('renders the site title in white', () => {
  render(<TopAppBar {...mockProps} />);
  expect(screen.getByTestId('site-title')).toHaveStyle(
    `fill: ${colour.header.font}`,
  );
});

test('is accessible', async () => {
  const {container} = render(<TopAppBar {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
