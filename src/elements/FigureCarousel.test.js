import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureCarousel from './FigureCarousel';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FigureCarousel />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 74.7078vw;
        max-height: 703px;
        max-width: 941px;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      <div>
        <figure
          class="c0"
        />
      </div>
    `);
  });
  test('Spring', () => {
    const {container} = render(<FigureCarousel.Spring {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: dvnCyE 16s linear infinite;
        animation: dvnCyE 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Summer', () => {
    const {container} = render(<FigureCarousel.Summer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: iIBqBc 16s linear infinite;
        animation: iIBqBc 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Autumn', () => {
    const {container} = render(<FigureCarousel.Autumn {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: kMBdxc 16s linear infinite;
        animation: kMBdxc 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Winter', () => {
    const {container} = render(<FigureCarousel.Winter {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: cdzHzA 16s linear infinite;
        animation: cdzHzA 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
