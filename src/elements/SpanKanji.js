import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/elements/Main';

import {font} from 'src/utils/fontScheme';

const SpanKanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  ${Main.Kohoan} & {
    font-family: ${font.kohoan.kanji.family};
    font-size: ${font.kohoan.kanji.size};
    font-weight: ${font.kohoan.kanji.weight};
    line-height: ${font.kohoan.kanji.lineHeight};
  }
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.kanji.family};
    font-size: ${font.ryoanji.kanji.size};
    font-weight: ${font.ryoanji.kanji.weight};
  }
`;

SpanKanji.propTypes = {};
export default SpanKanji;
