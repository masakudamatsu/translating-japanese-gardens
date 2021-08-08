import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/elements/Main';
import {font} from 'src/utils/fontScheme';

const Cite = styled.cite``;

Cite.Italic = styled.cite`
  ${Main.Kohoan} & {
    font-family: ${font.kohoan.italic.family};
    font-style: ${font.kohoan.italic.style};
    font-weight: ${font.kohoan.italic.weight};
  }
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.cite.italic.family};
    font-style: ${font.ryoanji.cite.italic.style};
    font-weight: ${font.ryoanji.cite.italic.weight};
  }
`;

Cite.Roman = styled.cite`
  font-style: normal;
`;

Cite.propTypes = {};
export default Cite;
