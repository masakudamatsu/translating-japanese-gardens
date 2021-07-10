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
          src: '/ryoanji/ryoanji-banner-spring-large.jpg',
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
          src: '/kohoan/bosen-garden-view.jpg',
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
