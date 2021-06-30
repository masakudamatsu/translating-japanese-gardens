import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/elements/Button';

const SvgBackButton = ({className, navShown}) => {
  return (
    <Button.SvgSurface
      aria-hidden={!navShown}
      aria-labelledby="back-button"
      backside
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
      data-testid="back-button"
      role="img"
      viewBox="0 0 25 48"
    >
      <title id="back-button">Back to main content</title>
      <text x="0" y="36.5">
        {`<`}
      </text>
    </Button.SvgSurface>
  );
};

SvgBackButton.propTypes = {
  navShown: PropTypes.bool,
};

export default SvgBackButton;
