import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

/*
const SportsStory = styled(MiniStory)`
  @media (${QUERIES.tabletAndUp}) {
    & img {
      height: ${132 / 16}rem;
    }    
  }
`;
*/

const MarketsSection = styled.section`
  width: 100%;
  margin-bottom: 48px;
`;

const MarketCards = styled.div`
  @media (${QUERIES.tabletAndUp}) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(${188.5 / 16}rem, 1fr));
      gap: 16px;
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    column-gap: 16px;
    & > * {
      min-width: ${220 / 16}rem;
    }
    overflow-x: auto;
  }
`;

export default SpecialtyStoryGrid;
