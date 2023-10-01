import styled from 'styled-components';
import PropTypes from 'prop-types';

import {useEffect, useRef, useState} from 'react';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

import Main from 'src/elements/Main';
import P from 'src/elements/P';
import Span from 'src/elements/Span';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';
import {spaceToTrim} from 'src/utils/vspaceScheme';

const Wrapper = styled.div`
  position: relative;
`; // for some reason, this element adds 12px to the height...

Wrapper.Kohoan = styled(Wrapper)`
  ${({width}) => `
    @media only screen and (min-width: ${width + 1}px) {
      ${hspace.kohoan.paddingSide.mobile}
    }
    `}
  ${hspace.kohoan.maxWidth.body}
  ${hspace.kohoan.paddingSide.tablet}
  ${hspace.kohoan.paddingSide.desktop}
`;

const Placeholder = styled(P)`
  align-items: center;
  bottom 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  ${Main.Kohoan} & {
    height: calc(100% - ${spaceToTrim['kohoan'].figure.bottom.mobile}px);
    @media only screen and ${breakpoint.fontSize} {
      height: calc(100% - ${spaceToTrim['kohoan'].figure.bottom.desktop}px);
    }
    ${seigaihaPattern}
  }
  ${Main.Ryoanji} & {
    height: calc(100% - ${spaceToTrim['ryoanji'].figure.bottom.mobile}px);
    @media only screen and ${breakpoint.fontSize} {
      height: calc(100% - ${spaceToTrim['ryoanji'].figure.bottom.desktop}px);
    }
    ${shippoPattern}
  }
`;

const ImageStyled = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  opacity: ${({loaded}) => (loaded ? '1' : '0')};
  transition: opacity 500ms linear;
`; // https://github.com/styled-components/styled-components/issues/1198#issuecomment-425650423

const ImageWithPlaceholder = ({
  sizes,
  srcset,
  src,
  alt,
  width,
  height,
  kohoan,
  priority,
  ...props
}) => {
  // https://codebrahma.com/how-to-smoothly-render-images-in-react-app/
  const [status, setStatus] = useState('loading');

  const imageLoaded = status === 'loaded';
  const error = status === 'error';

  // Deal with cached images: see https://stackoverflow.com/a/59809184/11847654
  const img = useRef();
  useEffect(() => {
    if (img.current.complete) {
      setStatus('loaded');
    }
  }, []);

  const imageStyled = (
    <ImageStyled
      decoding="async"
      loaded={imageLoaded}
      loading={priority ? null : `lazy`}
      onError={() => setStatus('error')}
      onLoad={() => setStatus('loaded')}
      ref={img}
      sizes={sizes}
      srcSet={srcset}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );

  const loadingMessage = <Placeholder>Loading...</Placeholder>;
  const errorMessage = (
    <Placeholder>
      {alt} <Span smallcaps>(We’re sorry for failing to load the image.)</Span>
    </Placeholder>
  );
  const placeholder = imageLoaded
    ? null
    : error
    ? errorMessage
    : loadingMessage;

  // rendering
  if (kohoan) {
    return (
      <Wrapper.Kohoan width={width} data-testid="image-wrapper">
        {imageStyled}
        {placeholder}
      </Wrapper.Kohoan>
    );
  } else {
    return (
      <Wrapper width={width} data-testid="image-wrapper">
        {imageStyled}
        {placeholder}
      </Wrapper>
    );
  }
};

ImageWithPlaceholder.propTypes = {
  kohoan: PropTypes.bool,
  priority: PropTypes.bool,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
};

export default ImageWithPlaceholder;
