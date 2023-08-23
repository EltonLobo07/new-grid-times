import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  column-gap: 20px;

  --mobAndLap-flex-direction: row-reverse;
  --mobAndLap-justify-content: space-between;
  --mobAndLap-align-items: center;

  flex-direction: var(--mobAndLap-flex-direction);
  justify-content: var(--mobAndLap-justify-content);
  align-items: var(--mobAndLap-align-items);
  @media (${QUERIES.tabletAndUp}) {
    flex-direction: column;
    justify-content: revert;
    align-items: revert;
    row-gap: 0.5rem;
  }
  @media (${QUERIES.laptopAndUp}) {
    flex-direction: var(--mobAndLap-flex-direction);
    justify-content: var(--mobAndLap-justify-content);
    align-items: var(--mobAndLap-align-items);
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
