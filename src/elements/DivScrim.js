import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

import {animation} from 'src/utils/specAnimation';
import {elevation} from 'src/utils/elevationScheme';
import {vspace} from 'src/utils/vspaceScheme';

const DivScrim = styled.div`
  animation: ${animation.scrim.keyframes} ${animation.scrim.duration}
    ${animation.scrim.easing};
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: ${vspace.header.height.mobile}px;
  width: 100vw;
  z-index: ${elevation.scrim};
  ${animation.navTop.speed}
`;

DivScrim.propTypes = {
  navShown: PropTypes.bool,
};
export default DivScrim;
