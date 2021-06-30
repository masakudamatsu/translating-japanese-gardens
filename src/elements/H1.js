import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/elements/Main';

import remify from 'src/utils/remify';
import round from 'src/utils/round';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

// Space between J and I: 28px for desktop
// Space between words: 60px for desktop
// 28px * (5/3) = 46.666px
// Word spacing reduced by 13.333px
// Font-size 103.208px
// Word spacing reduced by 0.129em

const H1 = styled.h1`
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.h1.family};
    font-size: ${remify(
      makeXHeightToBe(font.ryoanji.h1.xHeight.mobile, font.ryoanji.h1.metrics),
    )};
    font-weight: ${font.ryoanji.h1.weight};
    letter-spacing: ${font.ryoanji.h1.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      font.ryoanji.h1.lineHeightRatio.mobile,
      font.ryoanji.h1.metrics,
    )};
    @media only screen and ${breakpoint.h1('ryoanji')} {
      font-size: ${remify(
        makeXHeightToBe(
          font.ryoanji.h1.xHeight.tablet,
          font.ryoanji.h1.metrics,
        ),
      )};
    }
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          font.ryoanji.h1.xHeight.desktop,
          font.ryoanji.h1.metrics,
        ),
      )};
    }
    ${hspace.ryoanji.maxWidth.heading}
  }
  ${Main.Kohoan} & {
    color: ${colour.kohoan.h1.color};
    font-family: ${font.kohoan.h1.family};
    font-size: ${remify(
      makeXHeightToBe(font.kohoan.h1.xHeight.mobile, font.kohoan.h1.metrics),
    )};
    font-weight: ${font.kohoan.h1.weight};
    letter-spacing: ${font.kohoan.h1.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      font.kohoan.h1.lineHeightRatio.mobile,
      font.kohoan.h1.metrics,
    )};
    text-indent: ${remify(font.kohoan.h1.textIndent.mobile)};
    @media only screen and ${breakpoint.h1('kohoan')} {
      font-size: ${remify(
        makeXHeightToBe(font.kohoan.h1.xHeight.tablet, font.kohoan.h1.metrics),
      )};
      text-indent: ${remify(font.kohoan.h1.textIndent.tablet)};
    }
    ${hspace.kohoan.maxWidth.heading}
  }
  display: flex;
  flex-direction: column;
`;

function getPaddingTop(pageName, screenWidth) {
  return (
    vspace[pageName].xHeight[screenWidth] -
    spaceToTrim[pageName].h1.top[screenWidth]
  );
}

function getPaddingBetween(pageName, screenWidth) {
  return (
    vspace[pageName].xHeight[screenWidth] -
    spaceToTrim[pageName].h1.between[screenWidth]
  );
}

function getPaddingBottom(pageName, screenWidth) {
  return (
    vspace[pageName].xHeight[screenWidth] -
    spaceToTrim[pageName].h1.bottom[screenWidth]
  );
}

H1.Ryoanji = styled.span`
  padding-bottom: ${remify(getPaddingBetween('ryoanji', 'mobile'))};
  text-indent: ${remify(
    font.ryoanji.h1.textIndent.mobile,
  )}; /* Optical alignment with paragraphs */
  @media only screen and ${breakpoint.h1('ryoanji')} {
    text-indent: ${remify(font.ryoanji.h1.textIndent.tablet)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(getPaddingBetween('ryoanji', 'desktop'))};
    text-indent: ${remify(
      font.ryoanji.h1.textIndent.desktop,
    )}; /* Optical alignment with paragraphs */
  }
`;

H1.RockGarden = styled.span`
  font-size: ${round(font.ryoanji.h1Sub.size, 4)}em;
  padding-bottom: ${remify(getPaddingBottom('ryoanji', 'mobile'))};
  word-spacing: ${font.ryoanji.h1Sub.wordSpacing};
  @media only screen and ${breakpoint.h1('ryoanji')} {
    text-indent: ${remify(font.ryoanji.h1Sub.textIndent.tablet)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(getPaddingBottom('ryoanji', 'desktop'))};
    text-indent: ${remify(
      font.ryoanji.h1Sub.textIndent.desktop,
    )}; /* Optical alignment with paragraphs */
  }
`;

H1.Wrapper = styled.div`
  ${Main.Ryoanji} & {
    ${hspace.ryoanji.paddingSide.mobile}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
    background-color: ${colour.ryoanji.h1.background.mobile};
    background-image: ${colour.ryoanji.h1.overlay.mobile};
    color: ${colour.ryoanji.h1.color.mobile};
    padding-top: ${remify(getPaddingTop('ryoanji', 'mobile'))};
    width: 100%;
    @media only screen and ${breakpoint.sideMargin('ryoanji')} {
      background-color: ${colour.ryoanji.h1.background.desktop};
      background-image: ${colour.ryoanji.h1.overlay.desktop};
      bottom: 0;
      color: ${colour.ryoanji.h1.color.desktop};
      left: 0;
      padding-top: 0;
      position: absolute;
      z-index: 1;
    }
  }
  ${Main.Kohoan} & {
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
    position: relative;
    width: 100%;
    top: -${remify(getPullupDistance('kohoan', 'mobile'))};
    margin-bottom: -${remify(getPullupDistance('kohoan', 'mobile'))};
    @media only screen and ${breakpoint.h1('kohoan')} {
      top: -${remify(getPullupDistance('kohoan', 'tablet'))};
      margin-bottom: -${remify(getPullupDistance('kohoan', 'tablet'))};
    }
    @media only screen and ${breakpoint.fontSize} {
      top: -${remify(getPullupDistance('kohoan', 'desktop'))};
      margin-bottom: -${remify(getPullupDistance('kohoan', 'desktop'))};
    }
  }
`;

function getPullupDistance(pageName, screenWidth) {
  if (screenWidth === 'mobile' || screenWidth === 'desktop') {
    return (
      vspace[pageName].h1HyphenBottom[screenWidth] +
      spaceToTrim[pageName].figure.bottom[screenWidth]
    );
  } else if (screenWidth === 'tablet') {
    return (
      vspace[pageName].h1HyphenBottom['desktop'] +
      spaceToTrim[pageName].figure.bottom['mobile']
    );
  } else {
    throw new Error(
      `getPullupDistance() gets its second argument other than 'mobile', 'tablet', or 'desktop'.`,
    );
  }
}

H1.propTypes = {};

export default H1;
