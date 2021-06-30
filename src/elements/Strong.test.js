import React from 'react';
import {render, screen} from '@testing-library/react';

import Strong from './Strong';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<Strong />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Ryoanji-sc-55dih-1 .c0 {
      font-style: italic;
    }

    <div>
      <strong
        class="c0 "
      />
    </div>
  `);
});
