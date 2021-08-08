import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/elements/Main';
import {font} from 'src/utils/fontScheme';

const ItalicForeignPhrase = styled.i`
  ${Main.Kohoan} & {
    font-family: ${font.kohoan.italic.family};
    font-style: ${font.kohoan.italic.style};
    font-weight: ${font.kohoan.italic.weight};
  }
`;

ItalicForeignPhrase.propTypes = {};
export default ItalicForeignPhrase;
