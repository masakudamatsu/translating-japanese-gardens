import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Timeline from './Timeline';

const mockProps = {};

test('is accessible', async () => {
  await act(async () => {
    const {container} = render(<Timeline {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
