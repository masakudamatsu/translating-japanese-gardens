import React from 'react';
import {render, screen} from '@testing-library/react';

import ItalicForeignPhrase from './ItalicForeignPhrase';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<ItalicForeignPhrase />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Kohoan-sc-1ebpejr-2 .c0 {
      font-family: 'Libre Baskerville Italic','Verdana',serif;
      font-style: italic;
      font-weight: 400;
    }

    <div>
      <i
        class="c0 "
      />
    </div>
  `);
});
