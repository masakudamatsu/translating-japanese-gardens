import React from 'react';
import PropTypes from 'prop-types';

import Garden from './Garden';
import NavTimeline from 'src/elements/NavTimeline';
import Spacer from 'src/elements/Spacer';

const Timeline = ({currentPage, indexPage}) => {
  return (
    <NavTimeline>
      <Garden
        currentPage={currentPage}
        gardenName={{
          kanji: '龍安寺',
          latin: 'Ryoan-ji',
          lowercase: 'ryoanji',
        }}
        description="Reminding us of the principle of Zen"
        image={{
          src: '/index/ryoanji-banner-spring-large-1x.jpg',
          srcSet:
            '/index/ryoanji-banner-spring-large-1x.jpg 471w, /index/ryoanji-banner-spring-large-2x.jpg 942w',
          sizes:
            '(min-width: 620px) 471px, (min-width: 420px) calc(83.89vw - 32px), calc(100vw - 67px)', // generated by RespImageLint
          width: 1882,
          height: 1405,
          alt: 'A view of Ryoanji Rock Garden',
          priority: indexPage,
        }}
        year="c.1499"
      />
      <Spacer.Index />
      <Garden
        currentPage={currentPage}
        gardenName={{
          kanji: '孤篷庵',
          latin: 'Koho-an',
          lowercase: 'kohoan',
        }}
        description="Letting us sail at sunset to see the full moon offshore"
        image={{
          src: '/index/bosen-garden-view-1x.jpg',
          srcSet:
            '/index/bosen-garden-view-1x.jpg 471w, /index/bosen-garden-view-2x.jpg 942w',
          sizes:
            '(min-width: 580px) 471px, (min-width: 420px) calc(91.43vw - 41px), calc(100vw - 53px)',
          width: 1200,
          height: 800,
          alt: 'A view of Kohoan Temple Garden',
          priority: false,
        }}
        year="1643"
      />
    </NavTimeline>
  );
};

Timeline.propTypes = {
  currentPage: PropTypes.string,
  indexPage: PropTypes.bool,
};

export default Timeline;
