import React from 'react';
import {render, screen} from '@testing-library/react';

import Cite from './Cite';

const mockProps = {};

describe('renders UI as expected', () => {
  test('Italic', () => {
    const {container} = render(<Cite.Italic />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-1ebpejr-2 .c0 {
        font-style: italic;
      }

      .Main__Ryoanji-sc-1ebpejr-1 .c0 {
        font-family: 'Cormorant Garamond Italic','Times New Roman',serif;
        font-style: italic;
        font-weight: 600;
      }

      <div>
        <cite
          class="c0 "
        />
      </div>
    `);
  });
  test('Roman', () => {
    const {container} = render(<Cite.Roman />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-style: normal;
      }

      <div>
        <cite
          class="c0"
        />
      </div>
    `);
  });
});
