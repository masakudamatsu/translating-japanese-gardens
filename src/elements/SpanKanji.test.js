import React from 'react';
import {render, screen} from '@testing-library/react';

import SpanKanji from './SpanKanji';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<SpanKanji {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Kohoan-sc-55dih-2 .c0 {
      font-family: 'Shippori Mincho',serif;
      font-size: 1em;
      font-weight: 500;
      line-height: normal;
    }

    .Main__Ryoanji-sc-55dih-1 .c0 {
      font-family: 'Shippori Mincho',serif;
      font-size: 0.85em;
      font-weight: 500;
    }

    <div>
      <span
        class="c0 "
        lang="ja"
      />
    </div>
  `);
});
