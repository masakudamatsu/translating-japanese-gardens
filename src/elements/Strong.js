import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/elements/Main';
import {font} from 'src/utils/fontScheme';

const Strong = styled.strong`
  ${Main.Ryoanji} & {
    font-style: ${font.ryoanji.strong.style};
    font-weight: ${font.ryoanji.strong.weight};
  }
`;

Strong.propTypes = {};
export default Strong;
