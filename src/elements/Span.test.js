import React from 'react';
import {render, screen} from '@testing-library/react';

import Span from './Span';

const mockProps = {};

describe('Props work as intended', () => {
  test('LeadIn', () => {
    const {container} = render(<Span.LeadIn />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-1ebpejr-1 .c0 {
        font-family: 'Cormorant SC Semi-bold','Times New Roman',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
        word-spacing: -0.05em;
      }

      .Main__Kohoan-sc-1ebpejr-2 .c0 {
        font-family: 'Playfair Display SC',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
        word-spacing: -0.05em;
      }

      <div>
        <span
          class="c0 "
        />
      </div>
    `);
  });
  test('NoWrap', () => {
    const {container} = render(<Span.NoWrap />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        white-space: nowrap;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
  test('Source', () => {
    const {container} = render(<Span.Source />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        white-space: nowrap;
      }

      .Main__Kohoan-sc-1ebpejr-2 .c0 {
        color: rgb(200,200,200);
      }

      .Main__Ryoanji-sc-1ebpejr-1 .c0 {
        color: rgb(100,100,100);
      }

      <div>
        <span
          class="c0 c1"
        />
      </div>
    `);
  });
});
