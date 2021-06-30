import React from 'react';
import {render, screen} from '@testing-library/react';

import ItalicForeignPhrase from './ItalicForeignPhrase';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<ItalicForeignPhrase />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-style: italic;
    }

    <div>
      <i
        class="c0"
      />
    </div>
  `);
});
