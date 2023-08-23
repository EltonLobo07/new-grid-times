import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const separatedStoriesMap = (stories, Component, Divider) => {
  return stories.map((story, index) => {
    const common = <Component {...story} />;
    if (index > 0) {
      return (
        <React.Fragment key = {story.id}>
          <Divider />
          {common}
        </React.Fragment>
      );
    }
    return <React.Fragment key = {story.id}>{common}</React.Fragment>;
  }); 
};

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {separatedStoriesMap(SECONDARY_STORIES, SecondaryStory, HorizontalDivider)}
        </StoryList>
      </SecondaryStorySection>

      <VerticalDivider />

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpnionStoryList>
          {separatedStoriesMap(OPINION_STORIES, OpinionStory, MobileOnlyHorizontalDivider)}
        </OpnionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
      grid-template-columns: 2fr 1px 1fr;
      column-gap: 24px;
      grid-template-areas: 
        "main-story vertical-divider secondary-stories"
        "advertisement advertisement advertisement"
        "opinion-stories opinion-stories opinion-stories"
      ;
  }
`;

const VerticalDivider = styled.div`
  display: none;
  @media (${QUERIES.tabletAndUp}) {
    display: revert;
  }
  grid-area: vertical-divider;
  background-color: ${COLORS.gray[300]};
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpnionStoryList = styled(StoryList)`
  @media (${QUERIES.tabletAndUp}) {
      flex-direction: row;
      column-gap: 32px;
  }
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.gray[300]};
  margin: 1rem 0;
`;

const MobileOnlyHorizontalDivider = styled(HorizontalDivider)`
  @media (${QUERIES.tabletAndUp}) {
    display: none;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
