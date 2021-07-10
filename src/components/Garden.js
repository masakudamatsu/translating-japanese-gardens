import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ImageWithPlaceholder from '../components/ImageWithPlaceholder';
import SectionIndex from 'src/elements/SectionIndex';

const Garden = ({currentPage, gardenName, description, image, year}) => {
  return (
    <SectionIndex currentPage={currentPage} pageName={gardenName.lowercase}>
      <SectionIndex.H2>{year}</SectionIndex.H2>
      <SectionIndex.Card>
        <SectionIndex.Figure>
          <ImageWithPlaceholder
            src={image.src}
            srcSet={image.srcSet}
            sizes={image.sizes}
            width={image.width}
            height={image.height}
            alt={image.alt}
            priority={image.priority}
          />
        </SectionIndex.Figure>
        <SectionIndex.Kanji>{gardenName.kanji}</SectionIndex.Kanji>
        {currentPage === gardenName.lowercase ? (
          /* eslint-disable-next-line */
          <a>
            <SectionIndex.Latin gardenName={gardenName.lowercase}>
              {gardenName.latin}
            </SectionIndex.Latin>
          </a>
        ) : (
          <Link href={`/${gardenName.lowercase}`}>
            {/* eslint-disable-next-line */}
            <a>
              <SectionIndex.Latin gardenName={gardenName.lowercase}>
                {gardenName.latin}
              </SectionIndex.Latin>
            </a>
          </Link>
        )}
        <SectionIndex.P>{description}</SectionIndex.P>
      </SectionIndex.Card>
    </SectionIndex>
  );
};

Garden.propTypes = {
  currentPage: PropTypes.string,
  gardenName: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
};

export default Garden;
