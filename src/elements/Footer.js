import styled from 'styled-components';
import PropTypes from 'prop-types';

import SiteTitle from 'src/components/SiteTitle';

import {breakpoint, hspace} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
  scale,
} from 'src/utils/fontScheme';
import remify from 'src/utils/remify';
import {size} from 'src/utils/sizeScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const Footer = styled.footer`
  background-color: ${colour.footer
    .background}; /* override Global background of gray */
`;

Footer.TopBackground = styled.div`
  background-color: ${colour.footer.surface};
  padding-top: ${remify(getPaddingTop('mobile'))};
  @media only screen and ${breakpoint.fontSize} {
    padding-top: ${remify(getPaddingTop('desktop'))};
  }
`;

Footer.BottomBackground = styled(Footer.TopBackground)`
  padding-bottom: ${remify(getSpaceBetweenSections('mobile'))};
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(getSpaceBetweenSections('desktop'))};
  }
`;

const translateX = {
  mobile:
    -(size.siteTitle.margin.left * size.siteTitle.width.footer.mobile) /
    size.siteTitle.width.original,
  tablet:
    -(size.siteTitle.margin.left * size.siteTitle.width.footer.tablet) /
    size.siteTitle.width.original,
  desktop:
    -(size.siteTitle.margin.left * size.siteTitle.width.footer.desktop) /
    size.siteTitle.width.original,
};

Footer.DropCap = styled(SiteTitle)`
  fill: ${colour.footer.onSurface};
  float: left;
  transform: translate(${translateX.mobile}px, 5px);
  width: ${size.siteTitle.width.footer.mobile}px;
  @media only screen and ${breakpoint.sideMargin('footer')} {
    width: ${size.siteTitle.width.footer.tablet}px;
    transform: translate(${translateX.tablet}px, 0px);
  }
  @media only screen and ${breakpoint.fontSize} {
    width: ${size.siteTitle.width.footer.desktop}px;
    transform: translate(${translateX.desktop}px, 0px);
  }
`;

Footer.P = styled.p`
  /* font */
  color: ${colour.footer.onSurface};
  font-family: ${font.footer.family};
  font-size: ${remify(
    makeXHeightToBe(font.footer.xHeight.mobile, font.footer.metrics),
  )};
  font-weight: ${font.footer.weight};
  line-height: ${makeLineHeightRatioToBe(
    font.footer.lineHeightRatio.mobile,
    font.footer.metrics,
  )};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(
      makeXHeightToBe(font.footer.xHeight.desktop, font.footer.metrics),
    )};
    line-height: ${makeLineHeightRatioToBe(
      font.footer.lineHeightRatio.desktop,
      font.footer.metrics,
    )};
  }
  & + & {
    padding-bottom: ${remify(getPaddingBottom('mobile'))};
    padding-top: ${remify(getSpaceBetweenParagraphs('mobile'))};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(getPaddingBottom('desktop'))};
      padding-top: ${remify(getSpaceBetweenParagraphs('desktop'))};
    }
  }
  ${hspace.footer.maxWidth.body}
  ${hspace.footer.paddingSide.mobile}
  ${hspace.footer.paddingSide.tablet}
  ${hspace.footer.paddingSide.desktop}
text-align: ${({centerAligned}) => (centerAligned ? 'center' : 'left')};
`;

Footer.Small = styled.small`
  font-size: ${Math.sqrt(1 / scale) *
  100}%; /* override the browser's default */
`;

export default Footer;

function getSpaceBetweenSections(screenWidth) {
  return (
    vspace.footer.betweenSections[screenWidth] -
    spaceToTrim.footer.bottom[screenWidth]
  );
}

function getPaddingBottom(screenWidth) {
  return (
    vspace.footer.betweenLines[screenWidth] -
    spaceToTrim.footer.bottom[screenWidth]
  );
}

function getPaddingTop(screenWidth) {
  return (
    vspace.footer.betweenParagraphs[screenWidth] -
    spaceToTrim.footer.topToX[screenWidth]
  );
}

function getSpaceBetweenParagraphs(screenWidth) {
  return (
    vspace.footer.betweenParagraphs[screenWidth] -
    (spaceToTrim.footer.bottom[screenWidth] +
      spaceToTrim.footer.top[screenWidth])
  );
}
