import React from 'react';
import {render, screen} from '@testing-library/react';

import Strong from './Strong';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<Strong />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Ryoanji-sc-1ebpejr-1 .c0 {
      font-style: italic;
      font-weight: 600;
    }

    <div>
      <strong
        class="c0 "
      />
    </div>
  `);
});
